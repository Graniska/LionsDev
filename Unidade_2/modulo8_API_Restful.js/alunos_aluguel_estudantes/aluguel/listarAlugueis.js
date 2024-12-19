
    const {alugueis} = require('../data')

        function listarAlugueis(req, res) {
            res.status(200).send(alugueis)
        }

        module.exports = {listarAlugueis};