const { agendamentos } = require("../data");
const { listarAgendamentos } = require("./listar");

    function removerAgendamento() {
        
            listarAgendamentos();

                let index = +prompt('=> Digite o id do agendamento que deeja remover: ')-1

                    agendamentos.splice(index,1)

                        console.log('=> Agendamento removido com sucesso <=')
    }
module.exports = {removerAgendamento}