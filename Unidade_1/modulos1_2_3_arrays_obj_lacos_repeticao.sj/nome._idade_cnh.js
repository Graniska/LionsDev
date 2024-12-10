// Pergunte nome, idade e mostre uma saudação com essas informações, logo em seguida pergunte se o usuario
// possui CNH, se sim mostre a mensagem "Pode dirigir", se nao "Nao pode dirigir".


  
let nome = "";
let idade = "";
let CNH = "";

  console.log ("Digite seu nome: ")

    process.stdin.on('data', function(data){
        let input = data.toString().trim();

          if (!nome) {
            nome = input
            console.log ("Digite sua idade: ")
          } else if (!idade) {
            idade = input
            console.log (`Seja Bem-Vindo ${nome}, você possui cnh?`)
          } else {
            CNH = input
            if (CNH === "sim") {
              console.log ("Entao pode dirigir :)")
            } else {
              console.log ("Que pena, não pode dirigir")
            } process.exit();
          }
          
    })