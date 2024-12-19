const { alugueis, alunos } = require('../data.js')

    function atualizarAluguel(req, res) {
        
            const  {id} = req.params;
            const {idLivro, idEstudante, dataAluguel, dataDevolucao} = req.body;

                const aluguel = alugueis.find(a => a.id == id);

                    if (!aluguel) {
                        return res.status(400).send({mensagem: 'Aluguel não encontrado'});

                    }

                        aluguel.idLivro = idLivro,
                        aluguel.idEstudante = idEstudante,
                        aluguel.dataDevolucao = dataDevolucao,
                        aluguel.dataAluguel = dataAluguel

                            res.status(200).send({mensagem: 'Aluguel atualizado com sucesso', aluguel: aluguel})
    }

        module.exports = {atualizarAluguel};