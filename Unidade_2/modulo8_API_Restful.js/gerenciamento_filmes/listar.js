
    const {filmes} = require('./data')

        function listarFilmes(req, res) {
            res.status(200).send(filmes)
        }

        module.exports = listarFilmes