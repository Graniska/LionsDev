const { servicos } = require("../data")

        function adicionarServico() {
            
                let tipo = prompt('=> Tipo: ');
                let preco = +prompt('=> Preco: ');
                let idServico = servicos.length+1

                let servico = {tipo, preco, idServico};

                    servicos.push(servico);

                        console.log('=> Serviço adicionado com sucesso')
        }

            module.exports = {adicionarServico}