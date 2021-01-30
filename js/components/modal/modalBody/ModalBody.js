var ModalBody;
(function (ModalBody_1) {
    class ModalBody {
        constructor() {
            this._textArea = new TextArea.TextArea();
            this._adicional = new Modal.Adicional.Adicional();
            this._card = new Card.Card();
        }
        view(produtoSelecionado, classAdicional, idTextArea) {
            let retorno = '';
            let textoTextAera = produtoSelecionado.observacoes;
            let placeholderObservacao = textoTextAera === '' || textoTextAera === undefined
                ? 'Ex: Tirar cebola.'
                : '';
            retorno += `<div class="modal-body form-control">
                            <div class="d-flex">
                                ${this._card.view(produtoSelecionado.produto)}
                            </div>
                            </br>`;
            if (produtoSelecionado.produto.idCategoria == 1) // renderiza adiconais apenas para lanches 
                retorno += `<div>
                                ${this._adicional.view(produtoSelecionado, classAdicional)}
                            </div>
                            </br>`;
            if (produtoSelecionado.produto.idCategoria != 2) // não renderiza obserções caso seja bebida
                retorno += `<div>
                                ${this._textArea.view('Alguma observação?', idTextArea, '3', placeholderObservacao, textoTextAera)}
                            </div>`;
            retorno += `</div>`;
            return retorno;
        }
    }
    ModalBody_1.ModalBody = ModalBody;
})(ModalBody || (ModalBody = {}));
