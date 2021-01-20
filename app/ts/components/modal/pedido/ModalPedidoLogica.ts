namespace Pedido {
    export class ModalPedidoLogica {
        private _pedido: Model.Pedido;
        private _mensagem: Mensagem.Mensagem;

        constructor(private _carrinhoCompras: Model.CarrinhoCompras) {
            this._pedido = _carrinhoCompras.pedido;
            this._mensagem = new Mensagem.Mensagem();
        }

        obterNome(): void {
            document
                .querySelector('#nome')
                .addEventListener('blur', (event: Event) =>
                    this._carrinhoCompras.pedido.nome = this._obterValor(event, '#valida-nome')
                );
        }

        obterEndereco(): void {
            document
                .querySelector('#endereco')
                .addEventListener('blur', (event: Event) =>
                    this._carrinhoCompras.pedido.endereco = this._obterValor(event, '#valida-endereco')
                );
        }

        obterTipoPagamento(): void {
            document
                .querySelector('select')
                .addEventListener('change', (event: Event) =>
                    this._carrinhoCompras.pedido.tipoPagamento = parseInt(this._obterValor(event))
                );
        }

        obterValorEmDinheiro(): void {
            document
                .querySelector('#dinheiro')
                .addEventListener('blur', (event: Event) =>
                    this._carrinhoCompras.pedido.valorEmDinheiro = parseFloat(this._obterValor(event).replace(',', '.'))
                );
        }

        obterTipoCartao(): void {
            let cartoes = document
                .querySelectorAll('input[name="tipo-pagamento-cartao"]');

            cartoes.forEach((cartao) =>
                cartao
                    .addEventListener('click', (event: Event) =>
                        this._carrinhoCompras.pedido.tipoCartao = parseInt(this._obterValor(event))
                    )
            );
        }

        somarTotalPedido(): number {
            return this._pedido.valorPedido = 
                                this._pedido
                                    .obterProdutos()
                                    .reduce((total, produto) =>
                                        total += produto.valorTotal, 0);
        }

        somarTotal(): number{
            return this._pedido.valorTotal = this._pedido.valorPedido + this._pedido.taxaServico;
        }

        enviarMensagem(): void{
            document
                .querySelector('.btn-enviar-whatsapp')
                .addEventListener('click', () => this._mensagem.enviarMensagem());
        }

        private _obterValor(event: Event, seletorValidacao: string = ''): string {
            let alvo = <HTMLInputElement>event.target;

            if (this._oCampoEstaVazio(seletorValidacao, alvo.value))
                return;

            return alvo.value;
        }

        private _oCampoEstaVazio(seletor: string, valor: string): boolean {
            if (seletor == '')
                return;

            let campo = document.querySelector(seletor);

            if (valor == '') {
                campo.innerHTML = 'O campo deve ser preenchido'
                return true;
            }

            campo.innerHTML = '';
            return false;
        }
    }
}