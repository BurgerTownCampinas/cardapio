namespace ModalFooter{
    export class ModalFooter{

        view(logica: Modal.Produto.ModalProdutoLogica, textoBotao: string, idBotao: string): string{
            let quantidade = 1;
            return`
                <div class="modal-footer 
                    justify-content-center">
                    <div>
                        <button id="decremento"
                            type="button" 
                            class="btn btn-light 
                            text-color-vermelho-customizada 
                            ajuste-botao-decrementa">
                             - 
                        </button>
                        <p class="btn">
                            <strong id="quantidade">
                                ${quantidade}
                            </strong>
                        </p>                                 
                        <button id="incremento" 
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
            `;
        }
    }
}