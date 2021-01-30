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
        {
            id: 1,
            nome: 'Salad Burger',
            imgPath: './assets/img/salad.jpg',
            descricao: 'Pão Brioche, Blend de carnes nobre de 150g, Queijo Mussarela, Alface, Tomate e Cebola, Frescos dão um toque de glamour a está delícia.',
            valor: 18.00,
            idCategoria: 1
        },
        {
            id: 2,
            nome: 'Bacon Burger',
            imgPath: './assets/img/bacon.jpg',
            descricao: 'Pão Brioche, Blend de Carnes Nobres de 150g, Queijo Cheddar, Alface, Tomate, Cebola Caramelizada que da o sabor requentado a está combinação delicosa',
            valor: 21.00,
            idCategoria: 1
        },
        {
            id: 3,
            nome: 'Cheddar Burger',
            imgPath: './assets/img/cheddar.jpg',
            descricao: 'Pão Brioche, Blend de Carnes Nobre de 150g, Bacon Crocante, Alface, Tomate Frescos, Cebola Caramelizada, Creme Cheddar para dar aquele contraste maravilhosa no Sabor.',
            valor: 23.00,
            idCategoria: 1
        },
        {
            id: 4,
            nome: 'Calabresa Burger',
            imgPath: './assets/img/sem-image.jpg',
            descricao: 'Pão Brioche, Blend de Carnes Nobres de 150g, Queijo Mussarela, Ovo, Alface, Tomate Frescos, Cebola Caramelizada, Calabresa para dar aquele toque final no sabor.',
            valor: 24.00,
            idCategoria: 1
        },
        {
            id: 5,
            nome: 'Combo Bacon',
            imgPath: './assets/img/sem-image.jpg',
            descricao: 'Bacon Burger+ Fritas de 150g + Refri de 200ml',
            valor: 29.00,
            idCategoria: 4
        },
        {
            id: 6,
            nome: 'Combo Salad',
            imgPath: './assets/img/sem-image.jpg',
            descricao: 'Salad Burger+ Fritas de 150g + Refri de 200ml',
            valor: 26.00,
            idCategoria: 4
        },
        {
            id: 7,
            nome: 'Coca-Cola 250ml',
            imgPath: './assets/img/coca.png',
            descricao: 'Coca-cola 250ml Pet',
            valor: 2.50,
            idCategoria: 2
        },
        {
            id: 8,
            nome: 'Guarana Antarctica 235ml',
            imgPath: './assets/img/guarana.jpg',
            descricao: 'Guarana Antarctica 235ml Pet',
            valor: 2.50,
            idCategoria: 2
        },
        {
            id: 9,
            nome: 'Batata 150g',
            imgPath: './assets/img/fritas.jpg',
            descricao: 'Porção de fritas 150g',
            valor: 7.00,
            idCategoria: 3
        },
        {
            id: 10,
            nome: 'Burger',
            imgPath: '',
            descricao: 'Burger de carne bovina',
            valor: 7.00,
            idCategoria: 5
        },
        {
            id: 11,
            nome: 'Mussarela',
            imgPath: '',
            descricao: 'Mussarela',
            valor: 2.00,
            idCategoria: 5
        },
        {
            id: 12,
            nome: 'Cheddar',
            imgPath: '',
            descricao: 'Cheddar',
            valor: 2.00,
            idCategoria: 5
        },
        {
            id: 13,
            nome: 'Bacon',
            imgPath: '',
            descricao: 'Bacon',
            valor: 3.00,
            idCategoria: 5
        },
        {
            id: 14,
            nome: 'Calabresa',
            imgPath: '',
            descricao: 'Calabresa',
            valor: 3.00,
            idCategoria: 5
        },
        {
            id: 15,
            nome: 'Ovo',
            imgPath: '',
            descricao: 'Ovo',
            valor: 2.00,
            idCategoria: 5
        }
    ];
    Dados_1.Dados = Dados;
})(Dados || (Dados = {}));
