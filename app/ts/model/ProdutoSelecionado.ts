namespace Model{
    export class ProdutoSelecionado{
        private _valorTotal = 0;
        private _valorTotalAdicional = 0;
        private _quantidade = 1;
        private _adicionais: {id: number, nome: string}[];
        private _observacoes: string;
        private _id: number;

        constructor(private _produto: Produto){
            this._adicionais = new Array<any>();
        }

        get produto(): Model.Produto{
            return this._produto;
        }

        get valorTotalAdicional(): number{
            return this._valorTotalAdicional;
        }

        get quantidade(): number{
            return this._quantidade;
        }

        get valorTotal(): number{
            return this._valorTotal;
        }

        get observacoes(): string{
            return this._observacoes;
        }

        get id(): number{
            return this._id;
        }

        set valorTotalAdicional(valor: number){
            this._valorTotalAdicional = valor;
        }

        set quantidade(quantidade: number){
            this._quantidade = quantidade;
        }

        set valorTotal(valor: number){
            this._valorTotal = valor;
        }  

        set observacoes(observacoes: string){
            this._observacoes = observacoes;
        }

        set id(id: number){
            this._id = id;
        }
        
        adicionarAdicionais(obj: any): void{
            this._adicionais.push(obj);
        }

        removerAdicionais(id: number):void {
            let indice: number;
            
            this._adicionais.forEach((ad, index) => {
                if(ad.id == id)
                    indice = index;
            });

            this._adicionais.splice(indice, 1);
        }

        adicionarAdicionaisPorRange(obj: any[]): void{
            this._adicionais = obj;
        }

        obterAdicionais(): any[]{
            return this._adicionais;
        }
    }
}