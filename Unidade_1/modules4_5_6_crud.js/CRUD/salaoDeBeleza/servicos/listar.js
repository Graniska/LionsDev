    const {serivicos, servicos} = require('../data')

    function listarServicos() {
        servicos.forEach((objeto, index)=> {
            console.log(`
                id: ${objeto.idServico}
                tipo: ${objeto.tipo}
                preco: ${objeto.preco}
                `)
        });
    }

    module.exports = {listarServicos};