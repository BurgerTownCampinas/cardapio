var Modal;
(function (Modal) {
    var Produto;
    (function (Produto) {
        class ModalAdicionaProduto {
            constructor() {
                this._modalHeader = new ModalHeader.ModalHeader();
                this._modalBody = new ModalBody.ModalBody();
                this._modalFooter = new ModalFooter.ModalFooter();
            }
            carregarModal(id) {
                let produto = Helpers.ProdutoHelpers.buscarProdutoPorId(id);
                this._produtoSelecionado = new Model.ProdutoSelecionado(produto);
                this._logica = new Produto.ModalProdutoLogica(this._produtoSelecionado);
                document
                    .querySelector('#modal-adiciona')
                    .innerHTML = this._view();
                this._logica.incrementarQuantidade();
                this._logica.decrementarQuantidade();
                this._logica.handlerAdicional();
                this._logica.adicionarProduto();
                this._logica.obterObservacoes();
            }
            _view() {
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
        Produto.ModalAdicionaProduto = ModalAdicionaProduto;
    })(Produto = Modal.Produto || (Modal.Produto = {}));
})(Modal || (Modal = {}));
