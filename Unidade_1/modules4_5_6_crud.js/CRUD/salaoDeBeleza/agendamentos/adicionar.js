const { clientes, agendamentos } = require("../data")
const {listarServicos} = require('../servicos/listar')
const {listarClientes} = require("../clientes/listar")

    function adicionarAgendamento() {
        
            let data = prompt('=> Data: ')
            let horario = prompt('=>Horário: ')
            
                listarClientes();

                let index = +prompt('=> Digite o id do cliente no qual o serviço sera agendado: ')-1

                    if (isNaN(index)) {
                        console.log('=> Id inválido <=')
                    } else {
                        let clienteID = index;
                        listarServicos();
                            let index2 = +prompt('=> Digite o id do serviço no qual o cliente contratou: ')-1
                             let servicoID = index2
                                let agendamentoID = agendamentos.length+1
                                    let agendamento = {data, horario, clienteID, servicoID, agendamentoID}
                                    console.log('=> Agendamento realizado com sucesso')
                    } 
                        
    }

    module.exports = {adicionarAgendamento};