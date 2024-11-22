const { menuServicos } = require("..");
const { servicos } = require("../data");
const { listarServicos } = require("./listar");

    function removerServico() {
        
            listarServicos();


                let index = +prompt('=> Digite o id do serviço que deseja deletar: ')-1
    
                    if (isNaN(index)) {
                        console.log('=> Id inválido, tente novamente')
                        menuServicos();
                    } else {
                        servicos.splice(index, 1)
                        console.log('=> Serviço removido com sucesso')
                    }
    }

    module.exports = {removerServico};