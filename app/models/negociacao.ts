export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        // Alterna a referência da variável na memória
        // Para evitar que o método Date.setDate() altere a data da negociação
        const data = new Date(this._data.getTime());
        return data;
    }

}