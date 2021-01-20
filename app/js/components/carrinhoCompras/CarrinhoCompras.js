var CarrinhoCompras;
(function (CarrinhoCompras_1) {
    class CarrinhoCompras {
        constructor() {
            this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
        }
        carregarCarrinho() {
            document.
                querySelector('#carrinho-compra')
                .innerHTML = this._view();
            this._animarIconeCarrinho();
        }
        _view() {
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
        _extisteProdutosSelecionados() {
            if (this._carrinhoCompras.pedido.obterProdutos().length > 0)
                return '';
            return 'display-none';
        }
        _animarIconeCarrinho() {
            setTimeout(() => {
                let element = document.querySelector('.base-carrinho-compra');
                element.classList.remove('carrinho-compra-60px');
                element.classList.add('carrinho-compra-50px');
            }, 200);
        }
        _somarQuantidadeProdutos() {
            return this._carrinhoCompras
                .pedido
                .obterProdutos()
                .reduce((total, produto) => total += produto.quantidade, 0);
        }
    }
    CarrinhoCompras_1.CarrinhoCompras = CarrinhoCompras;
})(CarrinhoCompras || (CarrinhoCompras = {}));
