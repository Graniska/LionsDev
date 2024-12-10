const { menuClientes } = require("..");
const { clientes } = require("../data");
const { listarClientes } = require("./listar");

    function removerCliente() {
        
            listarClientes();

                let index = +prompt('=> Digite o id do cliente que deseja remover: ')-1

                    if (isNaN(index)) {
                        console.log('=> Id inválido')
                        menuClientes();
                    } else {
                        clientes.splice(index, 1)

                            console.log('=> Cliente removido com sucesso')
                    }
    }

    module.exports = {removerCliente} 