var Card;
(function (Card_1) {
    class Card {
        view(produto) {
            return `
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
    Card_1.Card = Card;
})(Card || (Card = {}));
