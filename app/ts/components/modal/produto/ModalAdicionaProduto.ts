namespace Modal.Produto {
    export class ModalAdicionaProduto {
        private _produtoSelecionado: Model.ProdutoSelecionado;
        private _modalHeader: ModalHeader.ModalHeader;
        private _modalBody: ModalBody.ModalBody;
        private _modalFooter: ModalFooter.ModalFooter;
        private _logica: ModalProdutoLogica;

        constructor() {
            this._modalHeader = new ModalHeader.ModalHeader();
            this._modalBody = new ModalBody.ModalBody();
            this._modalFooter = new ModalFooter.ModalFooter();
        }

        carregarModal(id: number) {
            let produto = Helpers.ProdutoHelpers.buscarProdutoPorId(id);
            this._produtoSelecionado = new Model.ProdutoSelecionado(produto);

            this._logica = new ModalProdutoLogica(this._produtoSelecionado);

            document
                .querySelector('#modal-adiciona')
                .innerHTML = this._view();

            this._logica.incrementarQuantidade();
            this._logica.decrementarQuantidade();
            this._logica.handlerAdicional();
            this._logica.adicionarProduto();
            this._logica.obterObservacoes();
        }

        private _view(): string {
            return `<div class="modal-dialog">
                        <div class="modal-content">
                            ${this._modalHeader.view()}
                            <form>
                                <!-- Modal body -->
                                ${this._modalBody.view(this._produtoSelecionado, 'adicional', 'textarea')}
                                <!-- Modal footer -->
                                ${this._modalFooter.view(this._logica, 'incremento', 'decremento', 'quantidade', 'Atualizar', 'total', this._produtoSelecionado.quantidade)}
                            </form>
                        </div>
                    </div>`;
        }

    }

}