namespace Model{
    export class Adicional{
        constructor(
            private _id: number,
            private _nome: string, 
            private _descricao: string, 
            private _valor: number,
            private _idCategoria: number
        ){
        }

        get id(): number{
            return this._id;
        }

        get nome(): string{
            return this._nome;
        }

        get descricao(): string{
            return this._descricao;
        }

        get valor(): number{
            return this._valor;
        }
    }
}