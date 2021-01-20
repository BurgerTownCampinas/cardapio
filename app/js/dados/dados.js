var Dados;
(function (Dados_1) {
    class Dados {
    }
    Dados.categorias = [
        { id: 1, nome: 'Burgers' },
        { id: 2, nome: 'Bebidas' },
        { id: 3, nome: 'Porções' },
        { id: 4, nome: 'Combos' },
        { id: 5, nome: 'Adicional' }
    ];
    Dados.produtos = [
        { id: 1, nome: 'Bacon', imgPath: './assets/img/bacon-1.jpg', descricao: 'Lanche de bacon', valor: 23.00, idCategoria: 1 },
        { id: 2, nome: 'Salada', imgPath: './assets/img/bacon-1.jpg', descricao: 'Lanche de salada', valor: 18.00, idCategoria: 1 },
        { id: 3, nome: 'Coca-Cola 250ml', imgPath: './assets/img/coca.png', descricao: 'Coca-cola 250ml Pet', valor: 2.50, idCategoria: 2 },
        { id: 4, nome: 'Combo Salada', imgPath: './assets/img/bacon-1.jpg', descricao: 'Lanche salada + coca 250ml + fritas de 150g', valor: 30.00, idCategoria: 4 },
        { id: 5, nome: 'Burger Carne', imgPath: './assets/img/bacon-1.jpg', descricao: 'Burger de carne bovina', valor: 7.00, idCategoria: 5 },
        { id: 6, nome: 'Burger Linguiça', imgPath: './assets/img/bacon-1.jpg', descricao: 'Burger de linguiça', valor: 7.00, idCategoria: 5 },
        { id: 7, nome: 'Batata 150g', imgPath: './assets/img/bacon-1.jpg', descricao: 'Porção de fritas 150g', valor: 7.00, idCategoria: 3 }
    ];
    Dados_1.Dados = Dados;
})(Dados || (Dados = {}));
