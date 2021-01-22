namespace Pedido {
    export class Item {
        view(produto: Model.ProdutoSelecionado, index: number): string {
            let observacoes = produto.observacoes === '' || produto.observacoes === undefined
                              ? 'Sem observação'
                              : produto.observacoes;


            return `<div class="d-flex" >
                        <div class="flex-fill width-80">
                            <p><strong>${produto.produto.nome}</strong></p>
                            <p>Observações: ${observacoes}</p>
                            <p>Quantidade ${produto.quantidade} - R$ ${Helpers.Commum.numeroParaString(produto.valorTotal)}</p>
                        </div>
                        <div class="flex-fill width-20">
                            <button type="button"
                                class="btn btn-danger 
                                background-color-vermelho-customizada 
                                padding-customizado-modal-produto" 
                                data-dismiss="modal"
                                data-toggle="modal" 
                                data-target="#modal-atualiza"
                                onclick="app.modalAtualizaProduto.carregarModal(${index})">
                                Editar
                            </button>
                        </div>
                    </div>
                <br />`
        }
    }
}