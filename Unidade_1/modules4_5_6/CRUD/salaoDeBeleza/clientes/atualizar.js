    const { menuClientes } = require('..');
const { clientes } = require('../data');
const {listarClientes} = require('./listar')

    function atualizarCliente() {
        
            listarClientes();

                let index = +prompt('=> Digite o id do cliente que deseja atualizar: ')-1

                    if (isNaN(index)) {
                        console.log('=> Index inválido, tente  novamente: ')
                        menuClientes();
                    } else {

                            let newName = prompt('=> Novo Nome: ')
                            let newCpf = prompt('=> Novo CPF: ')
                            let newPhone = prompt('=> Novo telefone; ')
                            let newEmail = prompt('=> Novo email: ')
                            let newClientId = clientes.length +1

                                clientes[index] = {Nome: newName, CPF: newCpf, Telefone: newPhone, email: newEmail, idCliente: newClientId};

                                    console.log('=> Cliente adicionado com sucesso');
                    }
    }

    module.exports = {atualizarCliente};