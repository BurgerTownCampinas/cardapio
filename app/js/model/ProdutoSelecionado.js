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
        adicionarIdAdicionais(id) {
            this._adicionais.push({ id: id });
        }
        removerIdAdicionais(id) {
            let indice;
            this._adicionais.forEach((ad, index) => {
                if (ad.id == id)
                    indice = index;
            });
            this._adicionais.splice(indice, 1);
        }
    }
    Model.ProdutoSelecionado = ProdutoSelecionado;
})(Model || (Model = {}));
