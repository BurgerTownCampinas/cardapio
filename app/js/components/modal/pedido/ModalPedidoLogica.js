var Pedido;
(function (Pedido) {
    class ModalPedidoLogica {
        constructor(_carrinhoCompras) {
            this._carrinhoCompras = _carrinhoCompras;
            this._pedido = _carrinhoCompras.pedido;
            this._mensagem = new Mensagem.Mensagem();
        }
        obterNome() {
            document
                .querySelector('#nome')
                .addEventListener('blur', (event) => this._carrinhoCompras.pedido.nome = this._obterValor(event, '#valida-nome'));
        }
        obterEndereco() {
            document
                .querySelector('#endereco')
                .addEventListener('blur', (event) => this._carrinhoCompras.pedido.endereco = this._obterValor(event, '#valida-endereco'));
        }
        obterTipoPagamento() {
            document
                .querySelector('select')
                .addEventListener('change', (event) => this._carrinhoCompras.pedido.tipoPagamento = parseInt(this._obterValor(event)));
        }
        obterValorEmDinheiro() {
            document
                .querySelector('#dinheiro')
                .addEventListener('blur', (event) => this._carrinhoCompras.pedido.valorEmDinheiro = parseFloat(this._obterValor(event).replace(',', '.')));
        }
        obterTipoCartao() {
            let cartoes = document
                .querySelectorAll('input[name="tipo-pagamento-cartao"]');
            cartoes.forEach((cartao) => cartao
                .addEventListener('click', (event) => this._carrinhoCompras.pedido.tipoCartao = parseInt(this._obterValor(event))));
        }
        somarTotalPedido() {
            return this._pedido.valorPedido =
                this._pedido
                    .obterProdutos()
                    .reduce((total, produto) => total += produto.valorTotal, 0);
        }
        somarTotal() {
            return this._pedido.valorTotal = this._pedido.valorPedido + this._pedido.taxaServico;
        }
        enviarMensagem() {
            document
                .querySelector('.btn-enviar-whatsapp')
                .addEventListener('click', () => this._mensagem.enviarMensagem());
        }
        _obterValor(event, seletorValidacao = '') {
            let alvo = event.target;
            if (this._oCampoEstaVazio(seletorValidacao, alvo.value))
                return;
            return alvo.value;
        }
        _oCampoEstaVazio(seletor, valor) {
            if (seletor == '')
                return;
            let campo = document.querySelector(seletor);
            if (valor == '') {
                campo.innerHTML = 'O campo deve ser preenchido';
                return true;
            }
            campo.innerHTML = '';
            return false;
        }
    }
    Pedido.ModalPedidoLogica = ModalPedidoLogica;
})(Pedido || (Pedido = {}));
