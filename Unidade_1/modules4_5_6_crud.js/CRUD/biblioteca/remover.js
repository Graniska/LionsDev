const { listarLivros } = require("./listar");
const {livros} = require('./data')

    function deletarLivros() {
        listarLivros();
            let index = +prompt('=> Digite o numero do livro que deseja deletar: ')-1
            
                if (index > 0 && index > livros.length) {
                    console.log('=> Indice inválido, tente novamente')
                } else {
                    livros.splice(index, 1)
                    console.log('=> Livro removido com sucesso')
                }
    }

    module.exports = {deletarLivros};