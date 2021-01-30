var Mensagem;
(function (Mensagem_1) {
    class Mensagem {
        constructor() {
            this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
        }
        enviarMensagem() {
            let fone = '+5519989227984';
            let link = `https://wa.me/${fone}?&text=${this._template()}`;
            window.open(link, '_blank');
            location.reload();
        }
        _template() {
            let tipoCartao = this._carrinhoCompras.pedido.tipoCartao === 0
                ? 'Debido' : 'Crédito';
            let tipoPagamento = '';
            if (this._carrinhoCompras.pedido.tipoPagamento === 1) {
                if (this._carrinhoCompras.pedido.valorEmDinheiro === NaN || this._carrinhoCompras.pedido.valorDoTroco === undefined) {
                    tipoPagamento = 'Sem necessidade de troco.';
                }
                else {
                    tipoPagamento = '*Valor em dinheiro*: R$ ' + Helpers.Commum.numeroParaString(this._carrinhoCompras.pedido.valorEmDinheiro) + '%0A' +
                        '*Valor do troco:* R$ ' + Helpers.Commum.numeroParaString(this._carrinhoCompras.pedido.valorDoTroco);
                }
            }
            else {
                tipoPagamento = '*Pagamento em Cartão:* ' + tipoCartao;
            }
            return 'Ola BurgerTown Gostaria de realizar um pedido.%0A' +
                '*Lista do pedido*%0A%0A' +
                this._carrinhoCompras
                    .pedido
                    .obterProdutos()
                    .map(produtoSelecionado => {
                    let observacoes = produtoSelecionado.observacoes === '' || produtoSelecionado.observacoes === undefined
                        ? 'Sem observação'
                        : produtoSelecionado.observacoes;
                    let adicionais = '';
                    adicionais += produtoSelecionado
                        .obterAdicionais()
                        .map(adicional => adicional.nome)
                        .join(' - ');
                    adicionais = adicionais !== '' ? adicionais : 'Sem adicional';
                    let observacoesText = '';
                    let adicionaisText = '';
                    if (produtoSelecionado.produto.idCategoria === 1) // renderiza somente para lanches
                        adicionaisText += `Adicionais: ${adicionais} %0A`;
                    if (produtoSelecionado.produto.idCategoria !== 2) // não renderiza quando for bebida
                        observacoesText += `Observações: ${observacoes} %0A`;
                    return '*' + produtoSelecionado.produto.nome + '*%0A' +
                        observacoesText +
                        adicionaisText +
                        'Quantidade ' + produtoSelecionado.quantidade + ' - R$ ' + Helpers.Commum.numeroParaString(produtoSelecionado.valorTotal) + '%0A%0A';
                }).join('') +
                '*Nome:* ' + this._carrinhoCompras.pedido.nome + '%0A' +
                '*Endereço de entrega:* ' + this._carrinhoCompras.pedido.endereco + '%0A%0A' +
                '*Valor pedido* R$ ' + Helpers.Commum.numeroParaString(this._carrinhoCompras.pedido.valorPedido) + '%0A' +
                '*Taxa de entrega* R$ ' + Helpers.Commum.numeroParaString(this._carrinhoCompras.pedido.taxaServico) + '%0A' +
                '*Total* R$ ' + Helpers.Commum.numeroParaString(this._carrinhoCompras.pedido.valorTotal) + '%0A%0A' +
                tipoPagamento;
        }
    }
    Mensagem_1.Mensagem = Mensagem;
})(Mensagem || (Mensagem = {}));
