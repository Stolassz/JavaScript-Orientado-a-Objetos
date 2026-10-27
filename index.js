import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

const minhaBiblioteca = new Biblioteca('Alexandria');

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
const livro2 = new Livro('1984', 'George Orwell', 1949);
const livro3 = new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943);
const livro4 = new LivroEspecial('Mistborn', 'Brandon Sanderson', 2006, 'Fantasia')

// Estoque da Biblioteca 
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

// Operação da Biblioteca 
livro1.emprestar();
livro3.emprestar();
livro1.devolver();
livro4.emprestar();

// Listagem geral
minhaBiblioteca.listarLivros();