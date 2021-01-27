namespace Modal.Produto{
    export class ModalAtualizaProdutoLogica{
        private _carrinhoCompras: CarrinhoCompras.CarrinhoCompras;
        private _quantidadeTemp: number;
        private _valorTotalTemp: number;
        private _valorTotalAdicionalTemp: number;
        private _observacoesTemp: string;
        private _adicionaisTemp: {id: number, nome: string}[];

        constructor(private _produtoSelecionado: Model.ProdutoSelecionado) {
            this._carrinhoCompras = new CarrinhoCompras.CarrinhoCompras();

            this._valorTotalTemp = _produtoSelecionado.valorTotal;
            this._quantidadeTemp = _produtoSelecionado.quantidade;
            this._valorTotalAdicionalTemp = _produtoSelecionado.valorTotalAdicional;
            this._observacoesTemp = _produtoSelecionado.observacoes;
            this._adicionaisTemp = [].concat(_produtoSelecionado.obterAdicionais());
        }

        incrementarQuantidade(): void {
            this._atualizaQuantidade('#incremento-atualiza', true);
        }

        decrementarQuantidade(): void {
            this._atualizaQuantidade('#decremento-atualiza');
        }

        somarTotalProdutos(): number {
            return this._valorTotalTemp = 
                (this._produtoSelecionado.produto.valor + this._valorTotalAdicionalTemp) * this._quantidadeTemp;
        }
        
        handlerAdicional(): void {
            let elemento = document.querySelectorAll('.adicional-atualiza');
            if(elemento === undefined || elemento === null)
                return;

            elemento
                .forEach(elemento =>
                    elemento.addEventListener('click', () => {
                        let input = <HTMLInputElement>elemento;
                        let elementoPai = <Element>elemento.parentNode;
                        let inputHidden = <HTMLInputElement>elementoPai.querySelector('.adicional-id');

                        if (input.checked){
                            let adicional = this._produtoSelecionado.produto.adicionais.filter(ad => ad.id === parseInt(inputHidden.value));

                            this._valorTotalAdicionalTemp += parseFloat(input.value);
                            this._adicionarAdicionais({id: parseInt(inputHidden.value), nome: adicional[0].descricao});
                        }
                        else{
                            this._valorTotalAdicionalTemp -= parseFloat(input.value);
                            this._removerAdicionais(parseInt(inputHidden.value));
                        }

                        this._renderizaTotal();
                    })
                );
        }

        obterObservacoes(): void{
            let elemento = document.querySelector('#textarea-adicional');
            if(elemento === undefined || elemento === null)
                return;
            
            elemento
                .addEventListener('blur', (event) => {
                    let input = <HTMLInputElement>event.target;
                    this._observacoesTemp = input.value;                   
                });
        }
        
        adtualizarProduto(): void{
            document
                .querySelector('#total-atualiza')
                .addEventListener('click', () =>{
                    this._produtoSelecionado.valorTotal = this._valorTotalTemp;
                    this._produtoSelecionado.quantidade = this._quantidadeTemp;
                    this._produtoSelecionado.valorTotalAdicional = this._valorTotalAdicionalTemp;
                    this._produtoSelecionado.adicionarAdicionaisPorRange(this._adicionaisTemp);
                    this._produtoSelecionado.observacoes = this._observacoesTemp;
                 
                    this._carrinhoCompras.carregarCarrinho();                   
                });            
        }

        excluirProduto(): void{
            document
                .querySelector('#excluir')
                .addEventListener('click', () =>{
                    Model.CarrinhoCompras.getInstance().pedido.removerProdutos(this._produtoSelecionado.id);

                    this._carrinhoCompras.carregarCarrinho();
                })
        }

        private _atualizaQuantidade(seletor: string, ehIncremento = false): void {
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

        private _renderizaQuantidade(): void {
            document
                .querySelector('#quantidade-atualiza')
                .innerHTML =  this._quantidadeTemp.toString();
        }

        private _renderizaTotal(): void {
            document
                .querySelector('#total-atualiza')
                .innerHTML = `
                    Adicionar R$ 
                    ${Helpers.Commum.numeroParaString(this.somarTotalProdutos())}
                `;
        }

        private _adicionarAdicionais(obj: any): void{
            this._adicionaisTemp.push({id: obj.id, nome: obj.nome });
        }

        private _removerAdicionais(id: number):void {
            let indice: number;
            
            this._adicionaisTemp.forEach((ad, index) => {
                if(ad.id == id)
                    indice = index;
            });

            this._adicionaisTemp.splice(indice, 1);
        }
    }
}