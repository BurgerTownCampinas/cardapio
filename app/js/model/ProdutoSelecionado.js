var Model;
(function (Model) {
    class ProdutoSelecionado {
        constructor(_produto) {
            this._produto = _produto;
            this._valorTotal = 0;
            this._valorTotalAdicional = 0;
            this._quantidade = 1;
            this._adicionais = new Array();
        }
        get produto() {
            return this._produto;
        }
        get valorTotalAdicional() {
            return this._valorTotalAdicional;
        }
        get quantidade() {
            return this._quantidade;
        }
        get valorTotal() {
            return this._valorTotal;
        }
        get observacoes() {
            return this._observacoes;
        }
        get id() {
            return this._id;
        }
        set valorTotalAdicional(valor) {
            this._valorTotalAdicional = valor;
        }
        set quantidade(quantidade) {
            this._quantidade = quantidade;
        }
        set valorTotal(valor) {
            this._valorTotal = valor;
        }
        set observacoes(observacoes) {
            this._observacoes = observacoes;
        }
        set id(id) {
            this._id = id;
        }
        adicionarAdicionais(obj) {
            this._adicionais.push(obj);
        }
        removerAdicionais(id) {
            let indice;
            this._adicionais.forEach((ad, index) => {
                if (ad.id == id)
                    indice = index;
            });
            this._adicionais.splice(indice, 1);
        }
        adicionarAdicionaisPorRange(obj) {
            this._adicionais = obj;
        }
        obterAdicionais() {
            return this._adicionais;
        }
    }
    Model.ProdutoSelecionado = ProdutoSelecionado;
})(Model || (Model = {}));
