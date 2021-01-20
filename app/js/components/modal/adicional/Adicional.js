var Modal;
(function (Modal) {
    var Adicional;
    (function (Adicional_1) {
        class Adicional {
            view(adicionais) {
                return `
                <label><strong>Adicionais</strong></label> 
                ${adicionais.map(adicional => `<div class="form-check">
                        <input value=${adicional.valor}
                            class="adicional
                            form-check-input" 
                            type="checkbox" />                            
                        <label class="form-check-label">
                            ${adicional.descricao} 
                            <strong>
                                R$ ${Helpers.Commum.numeroParaString(adicional.valor)}
                            </strong>
                        </label>
                        <input class="adicional-id" type="hidden" value="${adicional.id}" />
                    </div>`).join('')}`;
            }
        }
        Adicional_1.Adicional = Adicional;
    })(Adicional = Modal.Adicional || (Modal.Adicional = {}));
})(Modal || (Modal = {}));
