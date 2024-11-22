//importar livros ao invés de usar como parâmetro
const {livros} = require('./data')
const prompt = require('prompt-sync')()
    
    function adicionarLivro() {

    let nome = prompt('=> Digite o nome do livro: ')
    let autor = prompt('=> Digite o nome do autor: ')
    let genero = prompt('=> Digite o genero do livro: ')
    let paginas = prompt('=> Digite o tamanho do livro em paginas: ')

        let livro = {nome, autor, genero, paginas}

            livros.push(livro)

                console.log('=> Livro adicionado com sucesso')

            }

            module.exports = {adicionarLivro}