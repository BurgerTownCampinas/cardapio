namespace CarrinhoCompras{
    export class CarrinhoCompras{
        private _carrinhoCompras: Model.CarrinhoCompras;     

        constructor(){
            this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
        }
        
        carregarCarrinho(): void{
            document.
                querySelector('#carrinho-compra')
                .innerHTML = this._view();

            this._animarIconeCarrinho();
        }

        private _view(): string {
            return `<div class="${this._extisteProdutosSelecionados()} 
                        base-carrinho-compra carrinho-compra-60px 
                        background-color-vermelho-customizada 
                        text-color-branco-customizado" 
                        data-toggle="modal"
                        data-target="#modal-pedido"
                        onclick="app.pedido.carregarPedido()">
                        <i class="fa fa-shopping-cart">${this._somarQuantidadeProdutos()}</i>
                    </div>`;
        }

        private _extisteProdutosSelecionados(): string {
            if (this._carrinhoCompras.pedido.obterProdutos().length > 0)
                return '';

            return 'display-none';
        }

        private _animarIconeCarrinho(): void{
            setTimeout(() => {
                let element = document.querySelector('.base-carrinho-compra');
                element.classList.remove('carrinho-compra-60px');
                element.classList.add('carrinho-compra-50px');                
            }, 200);            
        }

        private _somarQuantidadeProdutos(): number{
            return this._carrinhoCompras
                            .pedido
                            .obterProdutos()
                            .reduce((total, produto) => 
                                total += produto.quantidade, 0);

        }
    }
}