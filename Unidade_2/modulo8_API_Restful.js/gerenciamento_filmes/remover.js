const { filmes } = require('./data');

const deletarFilme = (req, res) => {
    const { id } = req.params;
    const index = filmes.findIndex(f => f.id == id);

    if (index === -1) {
        return res.status(404).send({ mensagem: 'Filme não encontrado' });
    }

    const filmeRemovido = filmes.splice(index, 1)[0];

    res.status(200).send({ mensagem: 'Filme removido com sucesso!', filme: filmeRemovido });
};

module.exports = deletarFilme;
