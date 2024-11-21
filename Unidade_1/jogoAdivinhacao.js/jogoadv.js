
  /*  const prompt = require('prompt-sync')();

        let numero = Math.floor(Math.random() * 10);
        let tentativas = 5;
        let palpite;
            console.log('=====Jogo=de=Adivinhação=====' +
                "\n => Um numero entre 0 e 10 será gerado, você possui 5 tentativas"
            )

                while (tentativas > 0) {
                    palpite = Number(prompt('=> Insira o numero: '))
                        if (isNaN(palpite)){
                            console.log('=> Número inválido')
                        } else if (palpite < numero) {
                            tentativas--
                            console.log(`=> o numero é maior, restam ${tentativas} tentativas`)
                        } else if (palpite > numero) {
                            tentativas--
                            console.log(`=> o numero é menor, restam ${tentativas} tentativas`)
                        } else if (palpite === numero) {
                            console.log('=> Parabéns você acertou')
                            break;
                        }   if (tentativas === 5) {
                            console.log(`=> Suas tentativas acabaram, o numero era: ${numero}`)
                        }
                }
*/

    const prompt = require('prompt-sync')();

        let numero = Math.floor(Math.random() *10) 
        let tentativas = 4;
        let palpite;

            console.log('===Jogo==de==Adivinhação===')

                while (tentativas > 0) {
                    palpite = Number(prompt('=> Você possui 4 tentativas para tentar acertar qual o numero que foi gerado: '))

                        if (isNaN(palpite)) {
                            console.log('=> Numero inválido')
                        } else if (palpite > numero) {
                            tentativas-- 
                            console.log(`numero é menor, você possui ${tentativas} tentativas`)
                        } else if (palpite < numero) {
                            tentativas--
                            console.log(`=> numero é maior, restam ${tentativas} tentativas`)
                        } else if (palpite === numero) {
                            console.log('=> Parabéns, você acertou <=')
                            break;
                        } if (tentativas === 0) {
                            console.log(`=> Tentativas esgotadas, o numero era ${numero}`)
                            break;
                        }
                }
