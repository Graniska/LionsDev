/*
Crie um array chamado numeros com 5 números inteiros de sua escolha.
Encontre o maior e o menor número no array.
Imprima o maior e o menor número.
*/

    let numeros = [1, 2, 3, 4, 5]
    let maiorNumero = numeros[0]

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > maiorNumero)
                maiorNumero = numeros[i]
        }

            console.log("O maior numero é "+ maiorNumero)