namespace ModalBody {
    export class ModalBody {
        private _textArea: TextArea.TextArea;
        private _adicional: Modal.Adicional.Adicional;
        private _card: Card.Card;

        constructor(){
            this._textArea = new TextArea.TextArea();
            this._adicional = new Modal.Adicional.Adicional();
            this._card = new Card.Card();
        }
        
        view(produto: Model.Produto): string {
            let retorno = '';

            retorno += `<div class="modal-body form-control">
                            <div class="d-flex">
                                ${this._card.view(produto)}
                            </div>
                            </br>`;
            if(produto.idCategoria == 1) // renderiza adiconais apenas para lanches 
                retorno += `<div>
                                ${this._adicional.view(produto.adicionais)}
                            </div>
                            </br>`;

            if(produto.idCategoria != 2) // não renderiza obserções caso seja bebida
                retorno += `<div>
                                ${this._textArea.view('Alguma observação?', 'textarea', '3',  'Ex: Tirar cebola.')}
                            </div>`;
                                        
            retorno += `</div>`;

            return retorno;
        }
    }
}