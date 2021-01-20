namespace Helpers {
    export class ProdutoHelpers {
        static ListarProdutos(): Model.Produto[]{
            let produtos = new Array<Model.Produto>();
            
            Dados.Dados
                .produtos
                .map(produto =>
                    produtos.push(this.mapearProduto(produto))    
                );

            return produtos;
        }

        static ListarProdutosPorCategoria(id: number): any[]{
            let produtos = Dados.Dados
                            .produtos
                            .filter(produto => 
                                produto.idCategoria == id);
            return produtos
        }

        static buscarProdutoPorId(id:number) : Model.Produto{
            let produto = Dados.Dados
                                .produtos
                                .filter(
                                    produto => produto.id == id
                                );

            return this.mapearProduto(produto[0]);
        }

        static mapearProduto(produto: any): Model.Produto{
            return new Model.Produto(
                produto.id,
                produto.nome,
                produto.imgPath,
                produto.descricao,
                produto.valor,
                produto.idCategoria
            );
        }
    }
}
