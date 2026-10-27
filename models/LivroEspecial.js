import Livro from "./Livro.js";

// Herança: herda as características da class Livro
class LivroEspecial extends Livro {
    constructor(titulo, autor, ano, categoria) {
        super(titulo, autor, ano);
        this.categoria = categoria;
    }

// Polimorfismo
    exibirInfo() {
        return `[${this.categoria.toUpperCase()}] ${super.exibirInfo()}`;
    }

}

export default LivroEspecial;