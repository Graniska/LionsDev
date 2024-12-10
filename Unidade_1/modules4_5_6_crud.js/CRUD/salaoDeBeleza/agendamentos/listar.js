const { agendamentos } = require("../data");

    function listarAgendamentos() {
        
            agendamentos.forEach((objeto, index) => {
                
                    console.log(`
                        id: ${objeto.agendamentoID}
                        data: ${objeto.data}
                        horario: ${objeto.horario}
                        clienteID: ${objeto.clienteID}
                        serviçoID: ${objeto.servicoID}
                        `)
            });
    }

    module.exports = {listarAgendamentos};