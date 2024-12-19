
    const {alunos} = require('../data');

        function atualizarAluno(req, res) {
            
            const {id} = req.params;
            const { nome, ano, matricula, curso} = req.body;
            
                const aluno = alunos.find( a => a.id == id);

                    if (!aluno) {
                        return res.status(400).send({ mensagem: "Aluno não encontrado"});
                    }

                        aluno.nome = nome
                        aluno.ano = ano
                        aluno.curso = curso
                        aluno.matricula = matricula

                            res.status(200).send({mensagem: "Aluno editado com sucesso", aluno: aluno});
        }

        module.exports = { atualizarAluno };