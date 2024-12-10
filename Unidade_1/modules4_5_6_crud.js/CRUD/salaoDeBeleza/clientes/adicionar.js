const { clientes } = require("../data")

    function adicionarCliente() {
     
            let Nome = prompt('=> Nome: ')
            let CPF = prompt('=> CPF: ')
            let Telefone = prompt('=> Telefone: ')
            let email = prompt("=> Email: ")
            let idCliente = clientes.length +1

                let cliente = {Nome, CPF, Telefone, email, idCliente}

                    clientes.push(cliente) 

                        console.log('=> Cliente adicionado com sucesso')
    }

    module.exports = {adicionarCliente};
     