const { listarLivros } = require("./listar");
const {livros} = require('./data')

        function atualizarLivros() {
            
            listarLivros()

                let index = +prompt('=> Digite o numero do livro que deseja atualizar: ')-1
                    if (index < 0 && index > livros.length) {
                        console.log('=> Indice inválido, tente novamente')
                           
                    } else {
                        console.log('=> Atualizando dados..')
                        let novoNome = prompt('=> Nome: ')
                        let novoAutor = prompt("=> Autor: ")
                        let novoGenero = prompt('=> Genero: ')
                        let novoPaginas = prompt('=> Paginas: ')

                            livros[index] = {nome: novoNome, autor: novoAutor, genero: novoGenero,paginas: novoPaginas}

                                console.log('=> Livro atualizado com sucesso')
                    }
        }

        module.exports = {atualizarLivros};