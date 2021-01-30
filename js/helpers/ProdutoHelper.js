var Helpers;
(function (Helpers) {
    class ProdutoHelpers {
        static ListarProdutos() {
            let produtos = new Array();
            Dados.Dados
                .produtos
                .map(produto => produtos.push(this.mapearProduto(produto)));
            return produtos;
        }
        static ListarProdutosPorCategoria(id) {
            let produtos = Dados.Dados
                .produtos
                .filter(produto => produto.idCategoria == id);
            return produtos;
        }
        static buscarProdutoPorId(id) {
            let produto = Dados.Dados
                .produtos
                .filter(produto => produto.id == id);
            return this.mapearProduto(produto[0]);
        }
        static mapearProduto(produto) {
            return new Model.Produto(produto.id, produto.nome, produto.imgPath, produto.descricao, produto.valor, produto.idCategoria);
        }
    }
    Helpers.ProdutoHelpers = ProdutoHelpers;
})(Helpers || (Helpers = {}));
