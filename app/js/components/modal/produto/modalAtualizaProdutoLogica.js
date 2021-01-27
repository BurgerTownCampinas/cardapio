var Modal;
(function (Modal) {
    var Produto;
    (function (Produto) {
        class ModalAtualizaProdutoLogica {
            constructor(_produtoSelecionado) {
                this._produtoSelecionado = _produtoSelecionado;
                this._carrinhoCompras = new CarrinhoCompras.CarrinhoCompras();
                this._valorTotalTemp = _produtoSelecionado.valorTotal;
                this._quantidadeTemp = _produtoSelecionado.quantidade;
                this._valorTotalAdicionalTemp = _produtoSelecionado.valorTotalAdicional;
                this._observacoesTemp = _produtoSelecionado.observacoes;
                this._adicionaisTemp = [].concat(_produtoSelecionado.obterAdicionais());
            }
            incrementarQuantidade() {
                this._atualizaQuantidade('#incremento-atualiza', true);
            }
            decrementarQuantidade() {
                this._atualizaQuantidade('#decremento-atualiza');
            }
            somarTotalProdutos() {
                return this._valorTotalTemp =
                    (this._produtoSelecionado.produto.valor + this._valorTotalAdicionalTemp) * this._quantidadeTemp;
            }
            handlerAdicional() {
                let elemento = document.querySelectorAll('.adicional-atualiza');
                if (elemento === undefined || elemento === null)
                    return;
                elemento
                    .forEach(elemento => elemento.addEventListener('click', () => {
                    let input = elemento;
                    let elementoPai = elemento.parentNode;
                    let inputHidden = elementoPai.querySelector('.adicional-id');
                    if (input.checked) {
                        let adicional = this._produtoSelecionado.produto.adicionais.filter(ad => ad.id === parseInt(inputHidden.value));
                        this._valorTotalAdicionalTemp += parseFloat(input.value);
                        this._adicionarAdicionais({ id: parseInt(inputHidden.value), nome: adicional[0].descricao });
                    }
                    else {
                        this._valorTotalAdicionalTemp -= parseFloat(input.value);
                        this._removerAdicionais(parseInt(inputHidden.value));
                    }
                    this._renderizaTotal();
                }));
            }
            obterObservacoes() {
                let elemento = document.querySelector('#textarea-adicional');
                if (elemento === undefined || elemento === null)
                    return;
                elemento
                    .addEventListener('blur', (event) => {
                    let input = event.target;
                    this._observacoesTemp = input.value;
                });
            }
            adtualizarProduto() {
                document
                    .querySelector('#total-atualiza')
                    .addEventListener('click', () => {
                    this._produtoSelecionado.valorTotal = this._valorTotalTemp;
                    this._produtoSelecionado.quantidade = this._quantidadeTemp;
                    this._produtoSelecionado.valorTotalAdicional = this._valorTotalAdicionalTemp;
                    this._produtoSelecionado.adicionarAdicionaisPorRange(this._adicionaisTemp);
                    this._produtoSelecionado.observacoes = this._observacoesTemp;
                    this._carrinhoCompras.carregarCarrinho();
                });
            }
            excluirProduto() {
                document
                    .querySelector('#excluir')
                    .addEventListener('click', () => {
                    Model.CarrinhoCompras.getInstance().pedido.removerProdutos(this._produtoSelecionado.id);
                    this._carrinhoCompras.carregarCarrinho();
                });
            }
            _atualizaQuantidade(seletor, ehIncremento = false) {
                document
                    .querySelector(seletor)
                    .addEventListener('click', () => {
                    if (ehIncremento)
                        this._quantidadeTemp++;
                    else if (this._quantidadeTemp > 1)
                        this._quantidadeTemp--;
                    this._renderizaQuantidade();
                    this._renderizaTotal();
                });
            }
            _renderizaQuantidade() {
                document
                    .querySelector('#quantidade-atualiza')
                    .innerHTML = this._quantidadeTemp.toString();
            }
            _renderizaTotal() {
                document
                    .querySelector('#total-atualiza')
                    .innerHTML = `
                    Adicionar R$ 
                    ${Helpers.Commum.numeroParaString(this.somarTotalProdutos())}
                `;
            }
            _adicionarAdicionais(obj) {
                this._adicionaisTemp.push({ id: obj.id, nome: obj.nome });
            }
            _removerAdicionais(id) {
                let indice;
                this._adicionaisTemp.forEach((ad, index) => {
                    if (ad.id == id)
                        indice = index;
                });
                this._adicionaisTemp.splice(indice, 1);
            }
        }
        Produto.ModalAtualizaProdutoLogica = ModalAtualizaProdutoLogica;
    })(Produto = Modal.Produto || (Modal.Produto = {}));
})(Modal || (Modal = {}));
