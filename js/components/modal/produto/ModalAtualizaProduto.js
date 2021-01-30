var Modal;
(function (Modal) {
    var Produto;
    (function (Produto) {
        class ModalAtualizaProduto {
            constructor() {
                this._modalHeader = new ModalHeader.ModalHeader();
                this._modalBody = new ModalBody.ModalBody();
                this._modalFooter = new ModalFooter.ModalFooter();
            }
            carregarModal(index) {
                this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
                this._carrinhoCompras
                    .pedido
                    .obterProdutos()
                    .forEach((produto, indice) => {
                    if (indice == index) {
                        this._produtoSelecionado = produto;
                        return;
                    }
                });
                this._logica = new Produto.ModalAtualizaProdutoLogica(this._produtoSelecionado);
                document
                    .querySelector('#modal-atualiza')
                    .innerHTML = this._view();
                this._logica.incrementarQuantidade();
                this._logica.decrementarQuantidade();
                this._logica.handlerAdicional();
                this._logica.obterObservacoes();
                this._logica.adtualizarProduto();
                this._logica.excluirProduto();
            }
            _view() {
                return `<div class="modal-dialog">
                        <div class="modal-content">
                            ${this._modalHeader.view()}
                            <form>
                                <!-- Modal body -->
                                ${this._modalBody.view(this._produtoSelecionado, 'adicional-atualiza', 'textarea-adicional')}
                                <!-- Modal footer -->
                                ${this._modalFooter.view(this._logica, 'incremento-atualiza', 'decremento-atualiza', 'quantidade-atualiza', 'Atualizar', 'total-atualiza', this._produtoSelecionado.quantidade)}
                                <button id="excluir"
                                    type="button" 
                                    class="btn btn-secondary width-100
                                    padding-customizado-modal-produto 
                                    text-color-branco-customizado"
                                    data-dismiss="modal">Excluir</button>
                            </form>
                        </div>
                    </div>`;
            }
        }
        Produto.ModalAtualizaProduto = ModalAtualizaProduto;
    })(Produto = Modal.Produto || (Modal.Produto = {}));
})(Modal || (Modal = {}));
