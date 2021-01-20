var Model;
(function (Model) {
    class Produto {
        constructor(_id, _nome, _imgPath, _descricao, _valor, _idCategoria) {
            this._id = _id;
            this._nome = _nome;
            this._imgPath = _imgPath;
            this._descricao = _descricao;
            this._valor = _valor;
            this._idCategoria = _idCategoria;
            this._adicionais = Helpers.ProdutoHelpers.ListarProdutosPorCategoria(5);
        }
        get id() {
            return this._id;
        }
        get nome() {
            return this._nome;
        }
        get imgPath() {
            return this._imgPath;
        }
        get descricao() {
            return this._descricao;
        }
        get valor() {
            return this._valor;
        }
        get adicionais() {
            return this._adicionais;
        }
        get idCategoria() {
            return this._idCategoria;
        }
    }
    Model.Produto = Produto;
})(Model || (Model = {}));
