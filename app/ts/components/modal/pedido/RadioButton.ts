namespace Pedido{
    export class RadioButton {
        view(value: string, label: string, checked = ''): string{
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
}