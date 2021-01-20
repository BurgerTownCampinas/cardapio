namespace Model{
    export class Produto{
        private _adicionais: Adicional[]; 

        constructor(
            private _id: number,
            private _nome: string, 
            private _imgPath: string, 
            private _descricao: string, 
            private _valor: number,
            private _idCategoria: number
        ){
            this._adicionais = <Adicional[]>Helpers.ProdutoHelpers.ListarProdutosPorCategoria(5);
        }
        
        get id(): number{
            return this._id;
        }

        get nome(): string{
            return this._nome;
        }

        get imgPath(): string{
            return this._imgPath;
        }

        get descricao(): string{
            return this._descricao;
        }

        get valor(): number{
            return this._valor;
        }

        get adicionais(): Adicional[]{
            return this._adicionais;
        }

        get idCategoria(): number{
            return this._idCategoria;
        }
    }
}