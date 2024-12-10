/*
 1. Pergunte para o usuário dois números;
 2. Pergunte para o usuário a operação que deseja, deve possuir as opções de adição, subtração, multiplicação, divisão e porcentagem;
 3. Resolva a operação com os números informados;
 4. Mostre para o usuário o resultado da operação;
5. Valide a entrada do usuário e trate os possíveis erros (exceções tanto da lógica do código como também casos especiais da matemática).
*/

    const prompt = require('prompt-sync')();

        console.log('===========CALCULADORA=========')

            let numero1;
            let numero2;
            let operacao;

            while(true) {
               
               numero1 = Number(prompt(`=> Digite o primeiro numero: `))
                     if (isNaN(numero1)) {
                         console.log('=> ERROR; Digite um numero válido:')
                         break;
                 } 
               numero2 = Number(prompt(`=> Digite o segundo numero: `))
                     if (isNaN(numero2)) {
                         console.log('=> ERROR; Digite um numero válido:')
                         break;
                 } 
                    console.log(`=> OPERAÇÕES:
                        (1). Adição
                        (2). Subtração
                        (3). Divisão
                        (4). Multiplicação
                        (5). Porcentagem`)

                        operacao = prompt('=> Numero da operação desejada: ') 

                            switch (operacao) {
                                case '1':
                                    console.log(`=> ${numero1} + ${numero2} = ${numero1 + numero2}`)        
                                    break;
                                    case '2':
                                    console.log(`=> ${numero1} - ${numero2} = ${numero1 - numero2}`)
                                    break;
                                    case '3':
                                    if (numero1 === 0 || numero2 === 0) {
                                        console.log('=> Não é possível realizar uma divisão com o numero 0')
                                    } else {
                                        console.log(`=> ${numero1} / ${numero2} = ${numero1/numero2}`)
                                    }
                                    break;
                                    case '4':
                                    console.log(`=> ${numero1} x ${numero2} = ${numero1 * numero2}`)
                                    break;
                                    case '5':
                                    console.log(`=> ${numero1} % ${numero2} = ${numero1 * numero2 / 100}`)
                                    break;
                                    default:
                                        console.log('=> Valor inválido, tente novamente')
                                    break;
                            } let sair = prompt('=> Deseja sair? (sim/nao): ').toLowerCase().trim()
                                if (sair === 'sim') {
                                    break;
                                }
                          }
