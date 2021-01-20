namespace ListaProdutos {
    export class ListaProdutos {
        private static _instance: ListaProdutos;
        private _card: Card.Card;
        
        constructor() {
            this._card = new Card.Card();
        }

        static getInstance(): ListaProdutos{
            if(!this._instance)
                this._instance = new ListaProdutos();

            return this._instance;
        }

        listarProdutos(): string {
            return `${Helpers.ProdutoHelpers.ListarProdutos().map(produto =>{
                if(produto.idCategoria != 5) // filtra os adicionais para não aparecer na lista de produtos principais
                    return `
                        <div class="d-flex margin-bottom-customizada">
                            ${this._card.view(produto)}                            
                        </div>
                        <button type="button" 
                                class="btn btn-danger 
                                    ajuste-botao-lista-produto 
                                    padding-customizado-lista-produto 
                                    background-color-vermelho-customizada
                                    adiciona"                                            
                                data-toggle="modal" 
                                data-target="#modal-adiciona"
                                onclick="app.modalAdicionaProduto.carregarModal(${produto.id})">
                                Adicionar
                        </button>                        
                    `}).join('')}`;
        }

    }
}