
    const {filmes} = require('./data')

    function criarFilme(req, res) {
        console.log(req, body) 
            const filme = {
                id: filmes[filmes.length -1].id + 1,
                titulo: req.body.titulo,
                genero: req.body.genero,
                duracao: req.body.duracao,
                diretor: req.body.diretor
            }
        } 
        filmes.push(filme)
        res.status(201).send({mensagem: 'Filme registrado com sucesso', filme: filme})
    

        module.exports = criarFilme