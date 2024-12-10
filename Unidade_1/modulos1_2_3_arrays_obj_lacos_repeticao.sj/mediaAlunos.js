            /*
Escreva um programa que tenha um array com as notas de 10 alunos,
com isso:
1. Calcule e exiba a média das notas.
2. Encontre e exiba a nota mais alta e a nota mais baixa.
3. Conte e exiba quantas notas estão acima da média calculada.
4. Adicione uma nova nota ao array e exiba o array atualizado.
5. Conte e exiba quantas notas são consideradas reprovadas (abaixo
de 8.0).            */


            let notas = [10, 2.5, 4, 8.5, 3, 7, 5, 9, 7.7, 8.8]

            let soma = 0
            let notaMax = notas[0]
            let notaMin = notas[0]
            let notasAcimaMedia = 0
            let notasAbaixoMedia = []


                // media das notas
                for (let i = 0; i < notas.length; i++) {
                    soma = soma + notas[i]
                }

                    let media = soma / notas.length

                // nota máxima & nota minima
                for (let i = 0; i < notas.length; i++) {
                    if (notas[i] > notaMax) {
                        notaMax = notas[i]
                    } if (notas[i] < notaMin) {
                        notaMin = notas[i]
                    }
                }

                //notas acima da media
                    for (let i = 0; i < notas.length; i++) {
                        if (notas[i] > media) {
                            notasAcimaMedia++
                        }
                    }

                // notas abaixo da media 8.0
                    for (let i = 0; i < notas.length; i++) {
                        if (notas[i] < 8.0) {
                            notasAbaixoMedia.push(notas[i])
                        }
                    }
                
                    console.log(`
                        1. Media: ${media}
                        2. nota maxima: ${notaMax}
                        3. nota minima: ${notaMin}
                        4. notas acima da media: ${notasAcimaMedia}
                        5. notas reprovadas: ${notasAbaixoMedia}`)
            