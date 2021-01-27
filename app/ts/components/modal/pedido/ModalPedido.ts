namespace Pedido {
    export class ModalPedido {
        private _carrinhoCompras: Model.CarrinhoCompras;
        private _modalHeader: ModalHeader.ModalHeader;
        private _logica: ModalPedidoLogica;
        private _item: Item;
        private _textArea: TextArea.TextArea;
        private _radioButton: RadioButton;
        private _inputDinheiro: InputDinheiro;
        private _checkCartao: CheckCartao;

        constructor() {
            this._modalHeader = new ModalHeader.ModalHeader();
            this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
            this._logica = new ModalPedidoLogica(this._carrinhoCompras);
            this._item = new Item();
            this._textArea = new TextArea.TextArea();
            this._radioButton = new RadioButton();
            this._inputDinheiro = new InputDinheiro();
            this._checkCartao = new CheckCartao(this._radioButton);
        }

        carregarPedido(): void {
            document
                .querySelector('#modal-pedido')
                .innerHTML = this._view();

            this._logica.obterNome();
            this._logica.obterEndereco();
            this._logica.selecionarTipoPagamento();
            this._logica.obterValorEmDinheiro();
            this._logica.obterTipoCartao();
            this._logica.calcularTroco();
            this._logica.enviarMensagem();
            this._logica.mascaraCampoTroco();
        }

        private _view(): string {
            return `<div class="modal-dialog">
                        <div class="modal-content">
                            <!-- Modal Header -->
                            ${this._modalHeader.view()}
                            <!-- Modal body -->
                            <form id="form-order">
                                <div class="modal-body form-control">
                                    ${this._carrinhoCompras.pedido.obterProdutos().map((produtoSelecionado, index) =>
                                        this._item.view(produtoSelecionado, index)
                                    ).join('')}                       
                                    <div>
                                        <label>Nome</label>
                                        <input id="nome" 
                                            type="text" 
                                            class="form-control" />
                                        <span id="valida-nome" class="text-danger"></span>
                                    </div>
                                    <div>
                                        ${this._textArea.view('Endereço de entrega', 'endereco', '2', 'Ex: Rua Alvares Cabral, 195 - São João - Campinas/SP')}
                                        <span id="valida-endereco" class="text-danger"></span>
                                    </div>
                                    </br>
                                    <div>
                                        <select class="form-control form-control-sm">
                                            <option value="0" selected disabled>Selecione forma pagamento</option>
                                            <option value="1">Dinheiro</option>
                                            <option value="2">Cartão</option>
                                        </select>
                                        </br>
                                        
                                        ${this._inputDinheiro.view()}
                                        ${this._checkCartao.view()}
                                    </div>
                                    </br>
                                    <div class="text-right">
                                        <p>Valor pedido <strong>R$ ${Helpers.Commum.numeroParaString(this._logica.somarTotalPedido())}</strong></p>
                                        <p>Taxa de entrega <strong>R$ ${Helpers.Commum.numeroParaString(this._carrinhoCompras.pedido.taxaServico)}</strong></p>
                                        <p><strong>Total R$ ${Helpers.Commum.numeroParaString(this._logica.somarTotal())}</strong></p>
                                    </div>
                                    <!--Modal footer-->
                                    <div class="modal-footer justify-content-center">
                                        <button type="button" 
                                            class="btn btn-success 
                                            btn-enviar-whatsapp">
                                            Enviar pedido para whatsapp
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>`;
        }
    }
}