/*Semelhante a atividade anterior. Mas desta vez, o vetor inicial terá os
números: [27, 10, 3, 0, 20, 5, 6, 3].
Em seguida, adicione mais um número nesse vetor (sua idade por
exemplo) usando push(numero).
Depois, criar dois vetores para guardar os ímpares e outro para os
pares, adicionando da mesma forma que a atividade 2, os pares no
vetor dos pares, e ímpares no vetor dos ímpares.

*/
    let prompt = require('prompt-sync')()
    let numeros = [27, 10, 3, 0, 20, 5, 6, 3]
    let pares = []
    let impares = []

        let idade = prompt('Digite sua idade: ')
        
            numeros.push(idade)

                for (let i = 0; i < numeros.length; i++) {
                    if (numeros[i] % 2 == 1) {
                         impares.push(numeros[i])
                    } else {
                        pares.push(numeros[i])
                    }
                }

                console.log(`numeros: ${numeros}
                    1. pares: ${pares}
                    2. impares: ${impares}`)
