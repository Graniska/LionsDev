const { clientes } = require("../data");

    function listarClientes() {
        
            clientes.forEach((objeto, index) => {
                
                    console.log(`
                        id: ${objeto.idCliente}
                        nome: ${objeto.Nome}
                        Telefone: ${objeto.Telefone}
                        Email: ${objeto.email}
                        cpf: ${objeto.CPF}
                        `)
            });
    }

    module.exports = {listarClientes}