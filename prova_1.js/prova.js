/*
01. Descreva a funcionalidade de uma variável
utilizando um exemplo prático. Crie uma variável
que armazene o valor de um produto e, em seguida,
exiba uma mensagem no console por exemplo: “O
chocolate custa x reais.”

RESPOSTA: Variaveis tem como finalidade armazenar valores, temos três tipos de variaveis: simples, arrays e objetos.

*/

    let idade = 12 // aqui temos uma variavel simples, que esta armazenando um numérico

    let idades = [12, 11, 39, 49, 23, 59] // aqui temos uma variavel do tipo array, que armazena vários valores dentro de um vetor

    let pessoa = [
        {idade: 23,
         nome: "Ana",
         curso: "programação"   //aqui temos uma variavel do tipo objeto, que pode armazenar vários atributos diferentes
        }
    ]


/*
02. Escreva um código que determine se um número
é positivo, negativo ou zero e exiba uma mensagem
correspondente no console, sem utilizar funções.

*/

    let numero = [11]

        if (numero % 2 == 1) {
            console.log(`O numero ${numero} é impar`)
        } else {
            console.log(`O numero ${numero} é par`)
        }

//03. Considere o seguinte trecho de código:
/*
Modifique o código para que a mensagem seja "Está
muito quente." se a temperatura for 35 ou mais e
"Está agradável." caso contrário. Em seguida,
explique qual parte desse código será executada e
qual mensagem será impressa

*/
let temperatura = 30
let mensagem
if (temperatura >= 35) {
mensagem = "Está muito quente."
} else {
mensagem = "Está agradável."
}
console.log(mensagem);
    
/*
04. Escreva um programa que, dado um array de
números: [1, -2, 3, -4, 5], imprima no console um novo
array contendo apenas os números positivos.
*/

    let numeros = [1, -2, 3, -4, 5]
    let pares = []

        for (let i = 0; i < numeros.length; i++) {
            pares.push(numeros[i])
        }

        console.log(pares)

/*
05. Você está desenvolvendo um sistema simples
para calcular preços de produtos em uma loja. O
sistema precisa armazenar os preços dos produtos e
realizar certas operações básicas. Os preços são
representados por um array de números.
let precos = [1.99, 4.99, 7.99, 10.0, 15.0]
// Imprime todas os preços
for (let i = 0; i < precos.length; i++) {
console.log(precos[i]);
}
Baseado no código inicial, realize as seguintes
tarefas:
A) Calcular a Média dos Preços: Adicione um código
que calcule e imprima a média dos preços.
B) Preço Máximo e Preço Mínimo: Adicione um
código que encontre e imprima o preço mais alto
e o preço mais baixo.
C) Preços Acima da Média: Adicione um código que
conte e imprima quantos preços são maiores que 5
reais.
D) Adicionar Novo Preço: Escreva um código que
adicione um novo preço à lista (por exemplo, 35.00)
e, em seguida, imprima a lista atualizada de preços.
E) Produtos Baratos: Considere que um preço abaixo
de 10.00 é considerado como "barato". Calcule e
imprima quantos preços estão abaixo de 20.00.

*/

        let precos = [1.99, 4.99, 7.99, 10.0, 15.0]
        let soma = 0
        let precoMax = precos[0]
        let precoMin = precos[0]
        let precoAcimaMedia = 0
        let produtosBaratos = [] 

        for (let i = 0; i < precos.length; i++) {
            console.log(precos[i]);
            }

        //Calcular a Média dos Preços:
            for (let i = 0; i < precos.length; i++) {
                soma = soma + precos[i]
            }

                let media = soma / precos.length
                    console.log(`=> Esta é a media: ${media}`)

        //Calcular preço máximo 
            for (let i = 0; i < precos.length; i++)
                if (precos[i] > precoMax) {
                    precoMax = precos[i]
                }
               
        // Calcular o preco minimo
            for (let i = 0; i < precos.length; i++){
                if (precos[i] < precoMin) {
                    precoMin = precos[i]
                }
            }        
                console.log(`=> Preço máximo: ${precoMax}
                                 => Preço mínimo: ${precoMin}`)

        // preços acima da media de $5,00
            for (let i = 0; i < precos.length; i++) {
                 if (precos[i] > 5.0) {
                    precoAcimaMedia++
                 }
            }
                    console.log(`=> Preços acima da media: ${precoAcimaMedia}`)

        // Adicionar novo preço
            precos.push(35.00)

        // imprimindo lista de compras atualizada: 
            console.log(`=> Lista atualziada de preços: ${precos}`)

        // produtos baratos
            for (let i = 0; i < precos.length; i++) {
                if (precos[i] < 20.00 ) {
                    produtosBaratos.push(precos[i])
                }
            }
            
            console.log(`=> Lista de produtos baratos: ${produtosBaratos}`)