const { Residencias } = require ('./data');
const {listarResidencias} = require ('./listar')
    
    function atualizarResidencias() {
        
            listarResidencias();

                let index = +prompt('=> Digite o indice da residencia que deseja atualizar') -1

                    let newPro = prompt('=> Proprietario: ')
                    let newAdress = prompt('=> Rua: ')
                    let phone = +prompt('=> Telefone: ')
                    let number = prompt('=> N° da casa: ')

                        Residencias[index] = {proprietario: newPro, telefone: phone, rua: newAdress, numero: number}

                            console.log('=> Residencia atualizada com sucesso')

    }

    module.exports = {atualizarResidencias};