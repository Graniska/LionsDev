
    const {Residencias} = require('./data')

        function adicionarResidencias() {
            let proprietario = prompt('=> Proprietario: ')
            let telefone = prompt('=> Telefone: ')
            let rua = prompt("=> Rua: ")
            let numero = +prompt('=> Numero: ')
                
                if (isNaN(numero)){
                  
                    console.log('=> Digite um número válido')
                
                } else {
                
                    let residencia = {proprietario, telefone, rua, numero}
        
                    Residencias.push(residencia)

                    console.log('=> Residencia adicionada com sucesso')
                }
        }
        module.exports = {adicionarResidencias};