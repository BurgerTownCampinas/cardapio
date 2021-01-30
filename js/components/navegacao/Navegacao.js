var Navegacao;
(function (Navegacao_1) {
    class Navegacao {
        static view() {
            return `
                <nav class="navbar-expand" style="background-image: url('./assets/img/artesanal.jpg');">
                    <div class="text-center">
                        <img src="./assets/img/logo.png" class="ajuste-imagem-logo" alt="imagem responsiva">
                        <ul class="navbar-nav justify-content-center background-color-vermelho-customizada">
                            ${Dados.Dados
                .categorias
                .map(categoria => {
                if (categoria.nome != 'Adicional') {
                    return `
                                            <li>
                                                <a class="nav-link 
                                                   text-color-branco-customizado" 
                                                   href="#">
                                                    ${categoria.nome}
                                                </a>
                                            </li>`;
                }
            }).join('')}                     
                        </ul>
                    </div>
                </nav>`;
        }
    }
    Navegacao_1.Navegacao = Navegacao;
})(Navegacao || (Navegacao = {}));
