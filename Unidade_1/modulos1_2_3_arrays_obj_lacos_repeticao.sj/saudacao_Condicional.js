//Faça um script em javascript: crie um script em JavaScript que solicita o nome do usuário, solicita 
//a idade do usuário
//, verifica se o mesmo é maior de idade e exibe uma saudação diferente caso seja menor de idade.

    const prompt = require('prompt-sync')();

        let nome = prompt('=> Digite seu nome: ')
        let idade = parseFloat(prompt('=> Digite sua idade: '))

            if (idade < 18) {
                console.log("=> Olá " + nome + " você não é maior de idade")
            } else {
                console.log(`=> Olá ${nome}, você é mair de idade`)
            };
            
            process.exit()

        