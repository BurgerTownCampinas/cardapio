namespace ModalFooter{
    export class ModalFooter{

        view(logica: any, idIncremento: string, idDecremento: string, idQuantidade: string, textoBotao: string, idBotao: string, quantidade: number): string{
            return`
                <div class="modal-footer 
                    justify-content-center">
                    <div>
                        <button id="${idDecremento}"
                            type="button" 
                            class="btn btn-light 
                            text-color-vermelho-customizada 
                            ajuste-botao-decrementa">
                             - 
                        </button>
                        <p class="btn">
                            <strong id="${idQuantidade}">
                                ${quantidade}
                            </strong>
                        </p>                                 
                        <button id="${idIncremento}" 
                            type="button" 
                            class="btn btn-light 
                            text-color-vermelho-customizada 
                            ajuste-botao-incrementa">
                                + 
                        </button>
                    </div>
                    <div>
                        <button id="${idBotao}" 
                            type="button" 
                            class="btn btn-danger 
                            padding-customizado-modal-produto
                            background-color-vermelho-customizada"
                            data-dismiss="modal">
                                ${textoBotao} R$ 
                                ${Helpers.Commum.numeroParaString(logica.somarTotalProdutos())}
                        </button>
                    </div>
                </div>
            `;
        }
    }
}