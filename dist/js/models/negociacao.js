export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // Alterna a referência da variável na memória
        // Para evitar que o método Date.setDate() altere a data da negociação
        const data = new Date(this._data.getTime());
        return data;
    }
}
