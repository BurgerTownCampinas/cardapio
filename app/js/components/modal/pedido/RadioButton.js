var Pedido;
(function (Pedido) {
    class RadioButton {
        view(value, label) {
            return `<div class="form-check form-check-inline">
                        <input class="form-check-input" 
                            type="radio" 
                            name="tipo-pagamento-cartao"
                            value="${value}">
                        <label class="form-check-label">${label}</label>
                    </div>`;
        }
    }
    Pedido.RadioButton = RadioButton;
})(Pedido || (Pedido = {}));
