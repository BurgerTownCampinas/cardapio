var Model;
(function (Model) {
    class Pedido {
        constructor() {
            this._tipoPagamento = 0;
            this._tipoCartao = 0;
            this._taxaServico = 3;
            this._produtosSelecionados = new Array();
        }
        set nome(nome) {
            this._nome = nome;
        }
        get nome() {
            return this._nome;
        }
        set endereco(endereco) {
            this._endereco = endereco;
        }
        get endereco() {
            return this._endereco;
        }
        set tipoPagamento(tipoPagamento) {
            this._tipoPagamento = tipoPagamento;
        }
        get tipoPagamento() {
            return this._tipoPagamento;
        }
        set valorEmDinheiro(valorEmDinheiro) {
            this._valorEmDinheiro = valorEmDinheiro;
        }
        get valorEmDinheiro() {
            return this._valorEmDinheiro;
        }
        set tipoCartao(tipoCartao) {
            this._tipoCartao = tipoCartao;
        }
        get tipoCartao() {
            return this._tipoCartao;
        }
        set valorPedido(valorPedido) {
            this._valorPedido = valorPedido;
        }
        get valorPedido() {
            return this._valorPedido;
        }
        set valorTotal(valorTotal) {
            this._valorTotal = valorTotal;
        }
        get valorTotal() {
            return this._valorTotal;
        }
        get taxaServico() {
            return this._taxaServico;
        }
        set valorDoTroco(valor) {
            this._valorDoTroco = valor;
        }
        get valorDoTroco() {
            return this._valorDoTroco;
        }
        adicionarProdutos(produtoSelecionado) {
            if (this._produtosSelecionados.some(p => p === produtoSelecionado))
                return;
            this._produtosSelecionados.push(produtoSelecionado);
            produtoSelecionado.id = this._produtosSelecionados.length - 1;
        }
        removerProdutos(id) {
            this._produtosSelecionados.splice(id, 1);
            this._produtosSelecionados.map((produto, index) => produto.id = index);
        }
        obterProdutos() {
            return this._produtosSelecionados;
        }
    }
    Model.Pedido = Pedido;
})(Model || (Model = {}));
