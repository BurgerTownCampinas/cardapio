var Pedido;
(function (Pedido) {
    class Item {
        view(produto, index) {
            return `<div class="d-flex" >
                        <div class="flex-fill width-80">
                            <p><strong>${produto.produto.nome}</strong></p>
                            <p>Observações: ${produto.produto.descricao}</p>
                            <p>Quantidade ${produto.quantidade} - R$ ${produto.valorTotal}</p>
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
                <br />`;
        }
    }
    Pedido.Item = Item;
})(Pedido || (Pedido = {}));
