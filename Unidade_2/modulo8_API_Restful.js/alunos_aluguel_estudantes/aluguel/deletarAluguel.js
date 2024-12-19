
    const { alugueis} = require ('../data')

        function deletarAluguel(req, res) {

            const { id } = req.params;
            const index = alugueis.find( a =>  a.id == id);
        
            if (index === -1 ) {
                return res.status(404).send({mensagem: "Aluguel não encontrado"});
            }
                    const aluguelRemovido = alugueis.splice(index, 1)[0];

                        res.status(200).send({mensagem: 'Aluguel removido com sucesso'});
                        
            }

            module.exports = {deletarAluguel};