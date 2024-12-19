
const {livros} = require('../data')

const atualizarLivro = (req, res) => {
    const {id} = req.params
    const novoTitulo = req.body.titulo  // titulo do livro
    const novoAutor = req.body.autor
    const novoAno = req.body.ano
    const novoGenero = req.body.genero

    const livro = livros.find((b) => b.id == id)

    if (!livro) {
        return res.status(404).send({mensagem: 'Livro Não Encontrado'})
    }

    livro.autor = novoAutor
    livro.titulo = novoTitulo
    livro.ano = novoAno
    livro.genero = novoGenero

    res.status(200).send({mensagem: 'Livro Editado com Sucesso', livro: livro})
}

module.exports = {atualizarLivro}