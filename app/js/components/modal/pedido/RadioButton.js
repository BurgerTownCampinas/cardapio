var Pedido;
(function (Pedido) {
    class RadioButton {
        view(value, label, checked = '') {
            return `<div class="form-check form-check-inline">
                        <input class="form-check-input" 
                            type="radio" 
                            name="tipo-pagamento-cartao"
                            value="${value}"
                            ${checked}>
                        <label class="form-check-label">${label}</label>
                    </div>`;
        }
    }
    Pedido.RadioButton = RadioButton;
})(Pedido || (Pedido = {}));
