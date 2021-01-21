namespace Modal.Produto {
    export class ModalAtualizaProduto {
        private _carrinhoCompras: Model.CarrinhoCompras;
        private _produtoSelecionado: Model.ProdutoSelecionado;
        private _modalHeader: ModalHeader.ModalHeader;
        private _modalBody: ModalBody.ModalBody;
        private _modalFooter: ModalFooter.ModalFooter;

        carregarModal(index: number) {

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

        private _view(): string {
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

}