namespace Model{
    export class CarrinhoCompras{
        private static _instance: CarrinhoCompras;
        private _pedido: Model.Pedido;

        constructor(){
            this._pedido = new Model.Pedido;
        }

        static getInstance(): CarrinhoCompras{
            if(!this._instance)
                this._instance = new CarrinhoCompras();

            return this._instance;
        }

        get pedido(): Model.Pedido{
            return this._pedido;
        }
    }
}