// Abstração
class Biblioteca {
    constructor(nome) {
        // Atributos da biblioteca
        this.nome = nome;
        this.livros = []
    }

    // Metodos da biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        console.log(`Livros da Biblioteca de ${this.nome}
            `)
        this.livros.forEach((livro, i) => {
            console.log(`${i + 1}, ${livro.exibirInfo()}`)
        })
    }

};

export default Biblioteca;