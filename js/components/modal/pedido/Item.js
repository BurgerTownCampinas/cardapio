var Pedido;
(function (Pedido) {
    class Item {
        view(produto, index) {
            let retorno = '';
            let observacoes = produto.observacoes === '' || produto.observacoes === undefined
                ? 'Sem observação'
                : produto.observacoes;
            let adicionais = '';
            adicionais += produto
                .obterAdicionais()
                .map(adicional => adicional.nome)
                .join(' - ');
            adicionais = adicionais !== '' ? adicionais : 'Sem adicional';
            retorno += `
                <div class="d-flex" >
                    <div class="flex-fill width-80">
                        <p><strong>${produto.produto.nome}</strong></p>
                        <p>Quantidade ${produto.quantidade} - R$ ${Helpers.Commum.numeroParaString(produto.valorTotal)}</p>
                `;
            if (produto.produto.idCategoria === 1) // renderiza somente para lanches
                retorno += `<p>Adicionais: ${adicionais}</p>`;
            if (produto.produto.idCategoria !== 2) // não renderiza quando for bebida
                retorno += `<p>Observações: ${observacoes}</p>`;
            retorno += `
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
            return retorno;
        }
    }
    Pedido.Item = Item;
})(Pedido || (Pedido = {}));
