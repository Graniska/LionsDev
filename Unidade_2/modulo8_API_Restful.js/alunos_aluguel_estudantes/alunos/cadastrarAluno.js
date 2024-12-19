
    const { alunos } = require('../data');

        let lastId = alunos.length ? Math.max(...alunos.map(a => a.id)) : 0;
        //esta linha de comando é responsável por gerar um novo id com base nos valores anteriores

            function cadastrarAluno(req, res) {
                const aluno = { 
                    id: lastId + 1, 
                    nome: req.body.nome,
                    matricula: req.body.matricula,
                    ano: req.body.ano,
                    curso: req.body.curso
                };

                alunos.push(aluno);

                    lastId = aluno.id;
                    res.status(201).send({mensagem: "Aluno registrado com sucesso", aluno: aluno});
            }

            module.exports = { cadastrarAluno}