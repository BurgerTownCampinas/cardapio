var Pedido;
(function (Pedido) {
    class CheckCartao {
        constructor(_radioButton) {
            this._radioButton = _radioButton;
        }
        view(showHidden = 'display-none') {
            return `
            <div id="card" class="${showHidden}">
                ${this._radioButton.view('0', 'Debito', 'checked')}
                ${this._radioButton.view('1', 'Credito')}
            </div>
            `;
        }
    }
    Pedido.CheckCartao = CheckCartao;
})(Pedido || (Pedido = {}));
