
    const {alugueis} = require("../data")

    let lastId = alugueis.length ? Math.max(...alugueis.map(a => a.id)) : 0;

    function criarAluguel(req, res) {
       const aluguel = {
        id: req.body.id,
        idLivro: req.body.idLivro,
        idEstudante: req.body.idEstudante,
        dataAluguel: req.body.dataAluguel,
        dataDevolucao: req.body.dataDevolucao
       } 

        alugueis.push(aluguel);

            lastId = alugueis.id;
            res.status(201).send({mensagem: 'Aluguel cadastrado com sucesso', aluguel: aluguel})
            
    }

        module.exports = {criarAluguel};