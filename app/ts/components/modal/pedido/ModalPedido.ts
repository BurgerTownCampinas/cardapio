namespace Pedido{
    export class ModalPedido{
        private _carrinhoCompras: Model.CarrinhoCompras;
        private _modalHeader: ModalHeader.ModalHeader; 
        private _logica: ModalPedidoLogica;
        private _item: Item;
        private _textArea: TextArea.TextArea;
        private _radioButton: RadioButton;
               
        constructor(){
            this._modalHeader = new ModalHeader.ModalHeader();
            this._carrinhoCompras = Model.CarrinhoCompras.getInstance();
            this._logica = new ModalPedidoLogica(this._carrinhoCompras);
            this._item = new Item();
            this._textArea = new TextArea.TextArea();
            this._radioButton = new RadioButton();
        }

        carregarPedido(): void{
            document
                .querySelector('#modal-pedido')
                .innerHTML = this._view();

                this._logica.obterNome();
                this._logica.obterEndereco();
                this._logica.obterTipoPagamento();
                this._logica.obterValorEmDinheiro();
                this._logica.obterTipoCartao();
                this._logica.enviarMensagem();
        }

        private _view(): string{
            return `<div class="modal-dialog">
                        <div class="modal-content">
                            <!-- Modal Header -->
                            ${this._modalHeader.view()}
                            <!-- Modal body -->
                            <form id="form-order">
                                <div class="modal-body form-control">
                                    ${this._carrinhoCompras.pedido.obterProdutos().map((produtoSelecionado) =>
                                            this._item.view(produtoSelecionado)
                                        ).join('')}                       
                                    <div>
                                        <label>Nome completo</label>
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
                                        <div id="troco">
                                            <label>Precisa de troco?</label>
                                            <div class="d-flex">
                                                <p class="flex-fill width-30">Troco para: R$</p>
                                                <input id="dinheiro" 
                                                    type="text" 
                                                    class="form-control 
                                                    flex-fill width-70"
                                                placeholder="Ex: 50,00" 
                                                onkeypress="$(this).mask('#.###,##', {reverse: true})"
                                                />
                                            </div>
                                            <span class="text-danger"></span>
                                        </div>
                                        <div id="card">
                                            ${this._radioButton.view('0', 'Debito')}
                                            ${this._radioButton.view('1', 'Credito')}
                                        </div>
                                    </div>
                                    </br>
                                    <div class="text-right">
                                        <p>Valor pedido <strong>R$ ${this._logica.somarTotalPedido()}</strong></p>
                                        <p>Taxa de entrega <strong>R$ ${this._carrinhoCompras.pedido.taxaServico}</strong></p>
                                        <p><strong>Total R$ ${this._logica.somarTotal()}</strong></p>
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