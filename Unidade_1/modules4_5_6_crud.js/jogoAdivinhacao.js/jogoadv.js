let aleatorio = Math.floor(Math.random() * 100) + 101
console.log("Adivinhe numero. Você possui: (4 tentativas)")
let palpite = ""
let tentativas = 3

    process.stdin.on("data", function(data){
        palpite = data.toString().trim()
        if (palpite == aleatorio) {
            console.log ("PARABÉNS!! VOCÊ ADIVINHOU :)")
            process.exit();
        } else {
            tentativas--
            console.log("numero errado, você possui " + tentativas + " tentativas.")
        } if (palpite >= aleatorio + 1 || palpite <= aleatorio -1) {
            console.log ("frio")
        } else {
            console.log ("quente")
        } if (tentativas <= 0) {
            console.log ("Suas tentativas acabaram o numero era " + aleatorio + 
                "\n ==> Um novo número foi gerado, tente novamente."
            ) 
        tentativas = 3
          aleatorio = Math.floor(Math.random() * 100 ) + 101
        
        }
             
    })