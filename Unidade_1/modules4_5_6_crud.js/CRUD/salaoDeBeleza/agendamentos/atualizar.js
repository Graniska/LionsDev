    const { menuAgendamentos } = require('..');
    const {listarAgendamentos} = require('../agendamentos/listar')
    const {listarClientes} = require('../clientes/listar');
const { agendamentos } = require('../data');
const { listarServicos } = require('../servicos/listar');

    function atualizarAgendamento() {
        
        listarAgendamentos();
            
            let index = +prompt('=> Digite o id do agendamento que deseja atualizar: ')-1

                if (isNaN(index)) {
                    console.log('=> Id inválido, tente novamente: ')
                        menuAgendamentos();
                } else {
                    let newDate = prompt('=> Nova data: ')
                    let newHour = prompt('=> Novo horário: ')
                    
                        listarClientes();

                            let index2 = +prompt('=> Digite o id do cliente que deseja agendar este serviço: ')
                            let newClientID = index2
                        listarServicos();

                            let index3 = +prompt('=> Digite o id do serviço no qual o cliente contratou: ')
                            let newServicesID = index3

                            let agendamento = {data: newDate, horario: newHour, clienteID: newClientID, ServicoID: newServicesID, agendamentoID: agendamentos.length+1}

                                console.log('=> Agendamento atualizado com sucesso')
                }
    }

    module.exports = {atualizarAgendamento};