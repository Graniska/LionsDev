const { menuServicos } = require("..");
const { servicos } = require("../data");
const { listarServicos } = require("./listar");

    function atualizarServico() {
        
            listarServicos();

                let index = +prompt('=> Digite o id do servico que deseja atualizar') -1

                    if (isNaN(index)) {
                        console.log('=> Numero inválido, tente novamente <=')
                            menuServicos();
                    } else {
                        
                        let newType = prompt('=> Tipo de serviço: ')
                        let newPrice = +prompt('=> Novo valor: ')
                        let newId = servicos.length 
                            servicos[index] = {tipo: newType, preco: newPrice, idServico: newId}
                            
                                console.log('=> Serviço atualizado')
                                
                    }
    }

    module.exports = {atualizarServico};