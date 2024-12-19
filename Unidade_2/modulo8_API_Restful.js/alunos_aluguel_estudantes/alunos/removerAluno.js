
     const { alunos } = require('../data');

        function removerAluno(req, res) {

            const { id } = req.params;
            const index = alunos.findIndex( a => a.id == id);

                if (index === -1) {
                    return res.status(404).send({mensagem: "Aluno não encontrado"});

                }

                    const alunoRemovido = alunos.splice(index, 1)[0];

                        res.status(200).send({mensagem: 'Aluno removido com sucesso', aluno: alunoRemovido});

        }

        module.exports = {removerAluno}