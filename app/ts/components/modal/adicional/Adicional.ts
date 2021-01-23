namespace Modal.Adicional{
    export class Adicional{
    
        view(produtoSelecionado: Model.ProdutoSelecionado, classAdicional: string): string{
            return`
                <label><strong>Adicionais</strong></label> 
                ${produtoSelecionado.produto.adicionais.map(adicional =>{
                    let checked = '';
                    
                    if(produtoSelecionado.obterAdicionais().some(ad => ad.id == adicional.id))
                        checked = 'checked';
                    
                    return`<div class="form-check">
                                <input value=${adicional.valor}
                                    class="${classAdicional}
                                    form-check-input"
                                    type="checkbox" 
                                    ${checked}/>                            
                                <label class="form-check-label">
                                    ${adicional.descricao} 
                                    <strong>
                                        R$ ${Helpers.Commum.numeroParaString(adicional.valor)}
                                    </strong>
                                </label>
                                <input class="adicional-id" type="hidden" value="${adicional.id}" />
                            </div>`
                }).join('')
            }`;
        }
    }
}