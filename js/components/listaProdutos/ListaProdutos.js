var ListaProdutos;
(function (ListaProdutos_1) {
    class ListaProdutos {
        constructor() {
            this._card = new Card.Card();
        }
        static getInstance() {
            if (!this._instance)
                this._instance = new ListaProdutos();
            return this._instance;
        }
        listarProdutos() {
            return `${Helpers.ProdutoHelpers.ListarProdutos().map(produto => {
                if (produto.idCategoria != 5) // filtra os adicionais para não aparecer na lista de produtos principais
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
                    `;
            }).join('')}`;
        }
    }
    ListaProdutos_1.ListaProdutos = ListaProdutos;
})(ListaProdutos || (ListaProdutos = {}));
