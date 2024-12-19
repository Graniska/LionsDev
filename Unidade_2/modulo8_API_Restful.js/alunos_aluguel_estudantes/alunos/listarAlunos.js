
    const { alunos } = require('../data');

        function listarAlunos(req, res) {
            res.status(200).send(alunos)
        }

        module.exports = {listarAlunos}