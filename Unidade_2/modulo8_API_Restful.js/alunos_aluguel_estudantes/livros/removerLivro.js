const { livros } = require('../data'); 

function removerLivro(req, res) {

    const { id } = req.params;
    const idNum = parseInt(id, 10); 
    const index = livros.findIndex((b) => b.id === idNum);
    

    if (index === -1) {
     
        return res.status(404).json({ mensagem: 'Livro Não Encontrado' });
    }

  
    const livroRemovido = livros.splice(index, 1)[0];

    res.status(200).json({ mensagem: 'Livro Removido com Sucesso', livro: livroRemovido });
}

module.exports = {removerLivro};