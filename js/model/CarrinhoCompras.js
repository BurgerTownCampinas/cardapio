var Model;
(function (Model) {
    class CarrinhoCompras {
        constructor() {
            this._pedido = new Model.Pedido;
        }
        static getInstance() {
            if (!this._instance)
                this._instance = new CarrinhoCompras();
            return this._instance;
        }
        get pedido() {
            return this._pedido;
        }
    }
    Model.CarrinhoCompras = CarrinhoCompras;
})(Model || (Model = {}));
