var Modal;
(function (Modal) {
    var Produto;
    (function (Produto) {
        class ModalProdutoLogica {
            constructor(_produtoSelecionado) {
                this._produtoSelecionado = _produtoSelecionado;
                this._carrinhoComprasModel = Model.CarrinhoCompras.getInstance();
                this._carrinhoCompras = new CarrinhoCompras.CarrinhoCompras();
            }
            incrementarQuantidade() {
                this._atualizaQuantidade('#incremento', true);
            }
            decrementarQuantidade() {
                this._atualizaQuantidade('#decremento');
            }
            somarTotalProdutos() {
                return this._produtoSelecionado.valorTotal =
                    (this._produtoSelecionado.produto.valor + this._produtoSelecionado.valorTotalAdicional) * this._produtoSelecionado.quantidade;
            }
            handlerAdicional() {
                let elemento = document.querySelectorAll('.adicional');
                if (elemento === undefined || elemento === null)
                    return;
                elemento
                    .forEach(elemento => elemento.addEventListener('click', () => {
                    let input = elemento;
                    let elementoPai = elemento.parentNode;
                    let inputHidden = elementoPai.querySelector('.adicional-id');
                    let nome = elementoPai.querySelector('label');
                    if (input.checked) {
                        let adicional = this._produtoSelecionado.produto.adicionais.filter(ad => ad.id === parseInt(inputHidden.value));
                        this._produtoSelecionado.valorTotalAdicional += parseFloat(input.value);
                        this._produtoSelecionado.adicionarAdicionais({ id: parseInt(inputHidden.value), nome: adicional[0].descricao });
                    }
                    else {
                        this._produtoSelecionado.valorTotalAdicional -= parseFloat(input.value);
                        this._produtoSelecionado.removerAdicionais(parseInt(inputHidden.value));
                    }
                    this._renderizaTotal();
                }));
            }
            adicionarProduto() {
                document.querySelector('#total')
                    .addEventListener('click', () => {
                    this._carrinhoComprasModel.pedido.adicionarProdutos(this._produtoSelecionado);
                    this._carrinhoCompras.carregarCarrinho();
                });
            }
            obterObservacoes() {
                let elemento = document.querySelector('#textarea');
                if (elemento === undefined || elemento === null)
                    return;
                elemento
                    .addEventListener('blur', (event) => {
                    let input = event.target;
                    this._produtoSelecionado.observacoes = input.value;
                });
            }
            _atualizaQuantidade(seletor, ehIncremento = false) {
                document
                    .querySelector(seletor)
                    .addEventListener('click', () => {
                    if (ehIncremento)
                        this._produtoSelecionado.quantidade++;
                    else if (this._produtoSelecionado.quantidade > 1)
                        this._produtoSelecionado.quantidade--;
                    this._renderizaQuantidade();
                    this._renderizaTotal();
                });
            }
            _renderizaQuantidade() {
                document
                    .querySelector('#quantidade')
                    .innerHTML = this._produtoSelecionado.quantidade.toString();
            }
            _renderizaTotal() {
                document
                    .querySelector('#total')
                    .innerHTML = `
                    Adicionar R$ 
                    ${Helpers.Commum.numeroParaString(this.somarTotalProdutos())}
                `;
            }
        }
        Produto.ModalProdutoLogica = ModalProdutoLogica;
    })(Produto = Modal.Produto || (Modal.Produto = {}));
})(Modal || (Modal = {}));
