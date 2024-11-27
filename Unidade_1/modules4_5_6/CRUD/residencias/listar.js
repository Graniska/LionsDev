
    const {Residencias} = require('./data');

    function listarResidencias() {
        
            Residencias.forEach((objeto, index) => {
                console.log(`
                    |id:${index +1}
                    |Proprietario: ${objeto.proprietario}
                    |Telefone: ${objeto.telefone}
                    |Rua:${objeto.rua}
                    |Numero:${objeto.numero}`)
            });
    }

    module.exports = {listarResidencias};