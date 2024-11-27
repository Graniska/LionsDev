
    const {Residencias} = require('./data');
const { listarResidencias } = require('./listar');

        function removerResidencias() {

            listarResidencias();
            
                let index = +prompt('=> Digite o indice da Residencia que deseja atualizar') -1

                    Residencias.splice(index, 1)

                        console.log('=> Residencia removida com sucesso')
        }

        module.exports = {removerResidencias};