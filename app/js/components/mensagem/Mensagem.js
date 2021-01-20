var Mensagem;
(function (Mensagem_1) {
    class Mensagem {
        constructor() {
            this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
        }
        enviarMensagem() {
            let fone = '+5519991755210';
            let link = `https://wa.me/${fone}?&text=${this._template()}`;
            //window.open(link, '_blank');
            console.log(link);
        }
        _template() {
            return 'Ola BurgerTown Gostaria de realizar um pedido.%0A' +
                '*Lista do pedido*%0A%0A' +
                this._carrinhoCompras
                    .pedido
                    .obterProdutos()
                    .map(produto => {
                    return '*' + produto.produto.nome + '*%0A' +
                        'Observações: Aquiobservações %0A' +
                        'Adicionais: Aqui adicionais%0A' +
                        'Quantidade ' + produto.quantidade + ' - R$ ' + produto.valorTotal + '%0A%0A';
                }).join('') +
                '*Nome:* ' + this._carrinhoCompras.pedido.nome + '%0A' +
                '*Endereço de entrega:* ' + this._carrinhoCompras.pedido.endereco + '%0A%0A' +
                '*Valor pedido* R$ ' + this._carrinhoCompras.pedido.valorPedido + '%0A' +
                '*Taxa de entrega* R$ ' + this._carrinhoCompras.pedido.taxaServico + '%0A' +
                '*Total* R$ ' + this._carrinhoCompras.pedido.valorTotal + '%0A%0A' +
                '*Valor em dinheiro*: R$ ' + this._carrinhoCompras.pedido.valorEmDinheiro + '%0A' +
                '*Valor do troco:* R$ aqui vai o troco %0A%0A' +
                '*Pagamento em Cartão:* ' + this._carrinhoCompras.pedido.tipoCartao;
        }
    }
    Mensagem_1.Mensagem = Mensagem;
})(Mensagem || (Mensagem = {}));
