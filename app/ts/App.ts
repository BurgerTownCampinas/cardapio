class App {

    constructor(
        private _listaProdutos: ListaProdutos.ListaProdutos,
        private _modalAdicionaProduto: Modal.Produto.ModalAdicionaProduto,
        private _pedido: Pedido.ModalPedido, 
        private _modalAtualizaProduto: Modal.Produto.ModalAtualizaProduto
    ) {
        this._listaProdutos = ListaProdutos.ListaProdutos.getInstance();
        this._modalAdicionaProduto = new Modal.Produto.ModalAdicionaProduto();
    }

    get modalAdicionaProduto(): Modal.Produto.ModalAdicionaProduto {
        return this._modalAdicionaProduto;
    }

    get pedido(): Pedido.ModalPedido{
        return this._pedido;
    }

    get modalAtualizaProduto(): Modal.Produto.ModalAtualizaProduto {
        return this._modalAtualizaProduto;
    }

    render(): void {
        document
            .querySelector('#app')
            .innerHTML = this._view();
    }

    private _view() {
        return `<header class="margin-bottom-customizada">
                ${Navegacao.Navegacao.view()}
            </header>
            <main class="container">
                ${this._listaProdutos.listarProdutos()}  
    
                <div class="modal"
                    id="modal-adiciona">
                </div>

                <div class="modal"
                    id="modal-atualiza">
                </div>

                <div class="modal"
                    id="modal-pedido">
                </div>

                <div id="carrinho-compra">            
                </div>
                
            </main>
    
            <footer></footer>`;
    }
}

let app = new App(
    ListaProdutos.ListaProdutos.getInstance(),
    new Modal.Produto.ModalAdicionaProduto(),
    new Pedido.ModalPedido(), 
    new Modal.Produto.ModalAtualizaProduto()
);
app.render();
