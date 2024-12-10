//pedir para o usuario digitar um item para verificar se o mesmo esta na lista de compras
//se estiver, entao mostrar mensagem confirmando e mostrando o item e outra mensagem caso o contrario
// logo em seguida pergunte se o usuario gostaria de continuar adicionando ou se deseja sair
// se quiser sair entao termine o codigo

    const prompt = require('prompt-sync')()

    let compras = ["banana", "maçã", "abacate"]

        console.log('==========LISTA DE COMPRAS============')
        console.log(compras)
        
            while (true) {
                let resposta = prompt('=> Gostaria de adicionar um item a sua lista de compras?(sim/nao): ')
                    if (resposta === "sim") {
                        let item = prompt('=> Digite um item: ')
                            if (compras.includes(item)){
                                console.log('=> Item já existente na lista')
                            } else {
                                compras.push(item)
                                    console.log('=> ITEM ADICIONADO COM SUCESSO')
                                        console.log(`lista: ${compras}`)
                            }
                    } else if (resposta === "nao") {
                        console.log("=> Programa encerrado <=")
                            break
                    }
        }

