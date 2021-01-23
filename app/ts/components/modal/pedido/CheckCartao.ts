namespace Pedido{
    export class CheckCartao{
        constructor(private _radioButton: RadioButton){
        }

        view(showHidden ='display-none'): string{
            return `
            <div id="card" class="${showHidden}">
                ${this._radioButton.view('0', 'Debito', 'checked')}
                ${this._radioButton.view('1', 'Credito')}
            </div>
            `;
        }
    }
}