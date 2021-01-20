namespace Modal.Produto {
    export class ModalProdutoLogica {
        private _carrinhoComprasModel: Model.CarrinhoCompras;
        private _carrinhoCompras: CarrinhoCompras.CarrinhoCompras;

        constructor(private _produtoSelecionado: Model.ProdutoSelecionado) {
            this._carrinhoComprasModel = Model.CarrinhoCompras.getInstance();
            this._carrinhoCompras = new CarrinhoCompras.CarrinhoCompras();
        }

        incrementarQuantidade(): void {
            this._atualizaQuantidade('#incremento', true);
        }

        decrementarQuantidade(): void {
            this._atualizaQuantidade('#decremento');
        }

        somarTotalProdutos(): number {
            return this._produtoSelecionado.valorTotal = 
                (this._produtoSelecionado.produto.valor + this._produtoSelecionado.valorTotalAdicional) * this._produtoSelecionado.quantidade;
        }

        handlerAdicional(): void {
            document
                .querySelectorAll('.adicional')
                .forEach(elemento =>
                    elemento.addEventListener('click', () => {
                        let input = <HTMLInputElement>elemento;
                        let elementoPai = <Element>elemento.parentNode;
                        let inputHidden = <HTMLInputElement>elementoPai.querySelector('.adicional-id');

                        if (input.checked){
                            this._produtoSelecionado.valorTotalAdicional += parseFloat(input.value);
                            this._produtoSelecionado.adicionarIdAdicionais(parseInt(inputHidden.value));
                        }
                        else{
                            this._produtoSelecionado.valorTotalAdicional -= parseFloat(input.value);
                            this._produtoSelecionado.removerIdAdicionais(parseInt(inputHidden.value));
                        }

                        console.log(this._produtoSelecionado);

                        this._renderizaTotal();
                    })
                );
        }

        adicionarProduto(): void{
            document
                .querySelector('#total')
                .addEventListener('click', () =>{
                    this._carrinhoComprasModel.pedido.adicionarProdutos(this._produtoSelecionado); 
                    console.log(this._carrinhoComprasModel.pedido);
                    this._carrinhoCompras.carregarCarrinho();                   
                });            
        }

        obterObservacoes(): void{
            document    
                .querySelector('#textarea')
                .addEventListener('blur', (event) => {
                    let input = <HTMLInputElement>event.target;
                                       
                    this._produtoSelecionado.observacoes = input.value;
                });
        }

        private _atualizaQuantidade(seletor: string, ehIncremento = false): void {
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

        private _renderizaQuantidade(): void {
            document
                .querySelector('#quantidade')
                .innerHTML = this._produtoSelecionado.quantidade.toString();
        }

        private _renderizaTotal(): void {
            document
                .querySelector('#total')
                .innerHTML = `
                    Adicionar R$ 
                    ${Helpers.Commum.numeroParaString(this.somarTotalProdutos())}
                `;
        }
    }
}