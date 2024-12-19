
    const { livros } = require('../data');

        function listarLivros(req, res) {
            res.status(200).send(livros)
        }

        module.exports = {listarLivros};