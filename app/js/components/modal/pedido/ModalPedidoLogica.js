var Pedido;
(function (Pedido) {
    class ModalPedidoLogica {
        constructor(_carrinhoCompras) {
            this._carrinhoCompras = _carrinhoCompras;
            this._passo = 0;
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
        selecionarTipoPagamento() {
            document
                .querySelector('select')
                .addEventListener('change', (event) => {
                let elementoTroco = document.querySelector('#troco');
                let elementoCartao = document.querySelector('#card');
                let valorInput = parseInt(this._obterValor(event));
                this._pedido.tipoPagamento = valorInput;
                if (valorInput === 1) {
                    elementoTroco.classList.remove('display-none');
                    elementoCartao.classList.add('display-none');
                    return;
                }
                elementoTroco.classList.add('display-none');
                elementoCartao.classList.remove('display-none');
                let inputTroco = elementoTroco.querySelector('#dinheiro');
                inputTroco.value = '';
                let spanValidacao = elementoCartao.parentNode;
                spanValidacao.querySelector('#valida-dinheiro').innerHTML = '';
            });
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
        calcularTroco() {
            let elemento = document.querySelector('#dinheiro');
            if (elemento === undefined || elemento === null)
                return;
            elemento
                .addEventListener('blur', () => {
                let resultado = 'Sem necessidade de troco';
                let input = elemento;
                if (input.value !== '') {
                    let valorEmDinheiro = parseFloat(input.value.replace(',', '.'));
                    this._pedido.valorEmDinheiro = valorEmDinheiro;
                    let calculo = valorEmDinheiro - this._pedido.valorTotal;
                    this._pedido.valorDoTroco = calculo;
                    resultado =
                        calculo < 0
                            ? 'O valor informado é menor que o valor total do pedido'
                            : `Valor de troco R$ ${Helpers.Commum.numeroParaString(calculo)}`;
                }
                document.querySelector('#valida-dinheiro').innerHTML = resultado;
            });
        }
        mascaraCampoTroco() {
            let elemento = document.querySelector('#troco');
            elemento
                .addEventListener('click', (event) => {
                let input = event.target;
                input.value = '';
                document.querySelector('#valida-dinheiro').innerHTML = '';
            });
            elemento
                .addEventListener('keyup', (event) => {
                let input = event.target;
                let valor = '';
                let e = event;
                if (Number.isNaN(parseFloat(input.value)))
                    return;
                var key = e.keyCode || e.charCode;
                if (key == 8 || key == 46) {
                    input.value = '';
                    return;
                }
                if (this._passo === 3) {
                    let valorFormato = input.value.replace('.', '');
                    let arrayReverse = valorFormato.split('').reverse();
                    let doisUltimos = arrayReverse[1] + arrayReverse[0];
                    let array = arrayReverse.reverse();
                    let index;
                    array.forEach((a, i) => {
                        if (a !== "0" && index !== 0) {
                            index = i;
                        }
                    });
                    for (let i = index; i < array.length - 2; i++) {
                        valor += array[i];
                    }
                    valor += '.' + doisUltimos;
                }
                if (this._passo === 2) {
                    let ultimosValores = input.value.substring(2, 5);
                    let doisUltimosValores = ultimosValores.substring(1, 3);
                    let primeiroValor = ultimosValores.substring(0, 1);
                    valor += primeiroValor + '.' + doisUltimosValores;
                    this._passo = 3;
                }
                if (this._passo === 1) {
                    let ultimosValores = input.value.substring(3, 5);
                    valor += '0.' + ultimosValores;
                    this._passo = 2;
                }
                if (input.value.length === 1) {
                    valor = '';
                    valor += '0.0' + input.value;
                    this._passo = 1;
                }
                input.value = valor;
            });
        }
        enviarMensagem() {
            document
                .querySelector('.btn-enviar-whatsapp')
                .addEventListener('click', () => {
                if (!this._validarParaEnivar())
                    return;
                this._mensagem.enviarMensagem();
            });
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
        _validarParaEnivar() {
            let nomeInvalido = this._pedido.nome === undefined || this._pedido.nome === '';
            let enderecoInvalido = this._pedido.endereco === undefined || this._pedido.endereco === '';
            let tipoPagamentoInvalido = this._pedido.tipoPagamento === 0;
            if (nomeInvalido || enderecoInvalido || tipoPagamentoInvalido) {
                alert('Os campos Nome, Endereço de entrega devem ser preenchidos, e deve ser selecionada uma forma de pagamento para prosseguir.');
                return false;
            }
            return true;
        }
    }
    Pedido.ModalPedidoLogica = ModalPedidoLogica;
})(Pedido || (Pedido = {}));
