class App {
    constructor(_listaProdutos, _modalAdicionaProduto, _pedido, _modalAtualizaProduto) {
        this._listaProdutos = _listaProdutos;
        this._modalAdicionaProduto = _modalAdicionaProduto;
        this._pedido = _pedido;
        this._modalAtualizaProduto = _modalAtualizaProduto;
        this._listaProdutos = ListaProdutos.ListaProdutos.getInstance();
        this._modalAdicionaProduto = new Modal.Produto.ModalAdicionaProduto();
    }
    get modalAdicionaProduto() {
        return this._modalAdicionaProduto;
    }
    get pedido() {
        return this._pedido;
    }
    get modalAtualizaProduto() {
        return this._modalAtualizaProduto;
    }
    render() {
        document
            .querySelector('#app')
            .innerHTML = this._view();
    }
    _view() {
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
let app = new App(ListaProdutos.ListaProdutos.getInstance(), new Modal.Produto.ModalAdicionaProduto(), new Pedido.ModalPedido(), new Modal.Produto.ModalAtualizaProduto());
app.render();
