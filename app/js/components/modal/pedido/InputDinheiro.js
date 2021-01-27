var Pedido;
(function (Pedido) {
    class InputDinheiro {
        view(showHidden = 'display-none') {
            return `
                <div id="troco" class="${showHidden}">
                    <label>Precisa de troco?</label>
                    <div class="d-flex">
                        <p class="flex-fill width-30">Troco para: R$</p>
                        <input id="dinheiro" 
                            type="number" 
                            class="form-control 
                            flex-fill width-70"
                            placeholder="Ex: 50,00"/>
                    </div>
                </div>
                <span id="valida-dinheiro" class="text-danger"></span>
            `;
        }
    }
    Pedido.InputDinheiro = InputDinheiro;
})(Pedido || (Pedido = {}));
