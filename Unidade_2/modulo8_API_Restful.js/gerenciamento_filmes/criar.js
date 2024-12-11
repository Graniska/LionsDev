const { filmes } = require('./data');

// Vamos armazenar a última ID em uma variável
let lastId = filmes.length ? Math.max(...filmes.map(f => f.id)) : 0;

function criarFilme(req, res) {
    const filme = {
        id: lastId + 1,  // Atribui o próximo ID
        titulo: req.body.titulo,
        genero: req.body.genero,
        duracao: req.body.duracao,
        diretor: req.body.diretor
    };

    filmes.push(filme);
    lastId = filme.id;  // Atualiza o `lastId` para o último ID usado
    res.status(201).send({ mensagem: 'Filme registrado com sucesso', filme: filme });
}

module.exports = criarFilme;
