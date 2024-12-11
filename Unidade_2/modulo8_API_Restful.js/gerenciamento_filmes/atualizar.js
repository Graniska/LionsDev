const { filmes } = require('./data');

const editarFilme = (req, res) => {
    const { id } = req.params;
    const { titulo, diretor, ano, genero } = req.body;

    const filme = filmes.find(f => f.id == id);

    if (!filme) {
        return res.status(400).send({ mensagem: 'Filme não encontrado' });
    }

    filme.titulo = titulo;
    filme.diretor = diretor;
    filme.ano = ano;
    filme.genero = genero;

    res.status(200).send({ mensagem: 'Filme editado com sucesso', filme: filme });
};

module.exports = editarFilme;
