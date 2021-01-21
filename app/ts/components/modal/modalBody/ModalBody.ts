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
        
        view(produtoSelecionado: Model.ProdutoSelecionado): string {
            let retorno = '';
            
            console.log(produtoSelecionado);
            let placeholderObservacao = produtoSelecionado.observacoes === undefined
                                        ? 'Ex: Tirar cebola.'
                                        : produtoSelecionado.observacoes;

            retorno += `<div class="modal-body form-control">
                            <div class="d-flex">
                                ${this._card.view(produtoSelecionado.produto)}
                            </div>
                            </br>`;
            if(produtoSelecionado.produto.idCategoria == 1) // renderiza adiconais apenas para lanches 
                retorno += `<div>
                                ${this._adicional.view(produtoSelecionado)}
                            </div>
                            </br>`;

            if(produtoSelecionado.produto.idCategoria != 2) // não renderiza obserções caso seja bebida
                retorno += `<div>
                                ${this._textArea.view('Alguma observação?', 'textarea', '3',  placeholderObservacao)}
                            </div>`;
                                        
            retorno += `</div>`;

            return retorno;
        }        
    }
}