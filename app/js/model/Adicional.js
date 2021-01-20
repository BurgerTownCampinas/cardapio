var Model;
(function (Model) {
    class Adicional {
        constructor(_id, _nome, _descricao, _valor, _idCategoria) {
            this._id = _id;
            this._nome = _nome;
            this._descricao = _descricao;
            this._valor = _valor;
            this._idCategoria = _idCategoria;
        }
        get id() {
            return this._id;
        }
        get nome() {
            return this._nome;
        }
        get descricao() {
            return this._descricao;
        }
        get valor() {
            return this._valor;
        }
    }
    Model.Adicional = Adicional;
})(Model || (Model = {}));
