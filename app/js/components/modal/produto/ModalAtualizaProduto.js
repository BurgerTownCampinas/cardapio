var Modal;
(function (Modal) {
    var Produto;
    (function (Produto) {
        class ModalAtualizaProduto {
            carregarModal(index) {
                this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
                this._modalHeader = new ModalHeader.ModalHeader();
                this._modalBody = new ModalBody.ModalBody();
                this._modalFooter = new ModalFooter.ModalFooter();
                this._carrinhoCompras
                    .pedido
                    .obterProdutos()
                    .forEach((produto, indice) => {
                    if (indice == index) {
                        this._produtoSelecionado = produto;
                        return;
                    }
                });
                document
                    .querySelector('#modal-atualiza')
                    .innerHTML = this._view();
            }
            _view() {
                return `<div class="modal-dialog">
                        <div class="modal-content">
                            ${this._modalHeader.view()}
                            <form>
                                <!-- Modal body -->
                                ${this._modalBody.view(this._produtoSelecionado)}
                                <!-- Modal footer -->
                               
                            </form>
                        </div>
                    </div>`;
            }
        }
        Produto.ModalAtualizaProduto = ModalAtualizaProduto;
    })(Produto = Modal.Produto || (Modal.Produto = {}));
})(Modal || (Modal = {}));
