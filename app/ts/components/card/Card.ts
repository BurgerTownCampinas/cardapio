namespace Card{
    export class Card{
        
        view(produto: Model.Produto): string{
            return`
                <div class="flex-fill 
                        rounded 
                        div-imagem-card-produto 
                        box-shadow-customizada">
                    <img 
                        src="${produto.imgPath}" 
                        class="ajuste-imagem-card 
                            rounded" 
                        alt="Card imagem">
                </div>
                <div class="flex-fill 
                        div-conteudo-card-produto">
                    <h5>${produto.nome}</h5>
                    <p>${produto.descricao}</p>
                    <p>
                        <strong>
                        R$ ${Helpers.Commum.numeroParaString(produto.valor)}
                        </strong>
                    </p>
                </div>`;
        }

    }
}