
    async function deletarFilme(id, filmes) {
        try {
            const filmeDeletado = await filmes.findByIdAndDelete(id);
            return filmeDeletado;
        } catch (erro){
            console.error('Erro ao deletar filme', erro)
            throw erro;
        }
    }

    module.exports = deletarFilme