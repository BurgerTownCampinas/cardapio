namespace Pedido{
    export class InputDinheiro{
        view(showHidden ='display-none'): string{
            return `
                <div id="troco" class="${showHidden}">
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
                </div>
                <span id="valida-dinheiro" class="text-danger"></span>
            `;
        }
    }
}