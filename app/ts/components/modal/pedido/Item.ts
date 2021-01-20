namespace Pedido {
    export class Item {
        view(produto: Model.ProdutoSelecionado): string {
            return `<div class="d-flex" >
                        <div class="flex-fill width-80">
                            <p><strong>${produto.produto.nome}</strong></p>
                            <p>Observações: ${produto.produto.descricao}</p>
                            <p>Quantidade ${produto.quantidade} - R$ ${produto.valorTotal}</p>
                        </div>
                        <div class="flex-fill width-20">
                            <button 
                                class="btn btn-danger 
                                background-color-vermelho-customizada 
                                padding-customizado-modal-produto" 
                                data-toggle="modal" 
                                data-target="#modal-atualiza">
                                Editar
                            </button>
                        </div>
                    </div>
                <br />`
        }
    }
}