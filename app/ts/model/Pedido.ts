namespace Model {
    export class Pedido {

        private _produtosSelecionados: ProdutoSelecionado[];
        private _nome: string;
        private _endereco: string;
        private _valorEmDinheiro: number;
        private _valorDoTroco: number;
        private _valorPedido: number;
        private _valorTotal: number;
        private _tipoPagamento = 0;
        private _tipoCartao = 0;
        private _taxaServico = 3;

        constructor() {
            this._produtosSelecionados = new Array<ProdutoSelecionado>();
        }

        set nome(nome: string) {
            this._nome = nome;
        }

        get nome(): string {
            return this._nome;
        }

        set endereco(endereco: string) {
            this._endereco = endereco;
        }

        get endereco(): string {
            return this._endereco;
        }

        set tipoPagamento(tipoPagamento: number) {
            this._tipoPagamento = tipoPagamento;
        }

        get tipoPagamento(): number {
            return this._tipoPagamento;
        }

        set valorEmDinheiro(valorEmDinheiro: number) {
            this._valorEmDinheiro = valorEmDinheiro;
        }

        get valorEmDinheiro(): number {
            return this._valorEmDinheiro;
        }

        set tipoCartao(tipoCartao: number) {
            this._tipoCartao = tipoCartao;
        }

        get tipoCartao(): number {
            return this._tipoCartao;
        }

        set valorPedido(valorPedido: number) {
            this._valorPedido = valorPedido;
        }

        get valorPedido(): number {
            return this._valorPedido;
        }

        set valorTotal(valorTotal: number) {
            this._valorTotal = valorTotal;
        }

        get valorTotal(): number {
            return this._valorTotal;
        }

        get taxaServico(): number {
            return this._taxaServico;
        }

        set valorDoTroco(valor: number) {
            this._valorDoTroco = valor;
        }

        get valorDoTroco(): number {
            return this._valorDoTroco;
        }

        adicionarProdutos(produtoSelecionado: ProdutoSelecionado): void {
            if (this._produtosSelecionados.some(p => p === produtoSelecionado))
                return;

            this._produtosSelecionados.push(produtoSelecionado);
            produtoSelecionado.id = this._produtosSelecionados.length - 1;
        }

        removerProdutos(id: number): void {
            this._produtosSelecionados.splice(id, 1);
            this._produtosSelecionados.map((produto, index) => produto.id = index);
        }

        obterProdutos(): ProdutoSelecionado[] {
            return this._produtosSelecionados;
        }
    }
}