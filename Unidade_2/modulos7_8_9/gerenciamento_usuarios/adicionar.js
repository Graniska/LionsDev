const {usuarios} = require("./usuarios");

function cadastrarUsuario() {  

        console.log('=======Cadastro======')
        let nome = prompt('=> Nome: ')
        let telefones = [];
        let telefone;

        let id = usuarios[usuarios.length - 1].id + 1
        
        // laço de repetição para adicionar um ou mais telefones em um array
            while ((telefone = prompt('=> Telefone ou deixe o espaço em branco: '))) {
                if (telefone == '') {
                    break;
                } else {
                    telefones.push(telefone)
                }
            }

                
        let email = prompt('=> Email: ')

        // .find para verificar se o email existe
        let emailJaExiste = usuarios.find( user => user.email === email);

            if (emailJaExiste) {
                console.log('=> Este email está em uso, por favor tente novamente <=')
            } else {
            
                let usuario = {id: id, nome: nome, email: email, telefones: telefones};  
                    
                    usuarios.push(usuario);

                        console.log('=> Usuário cadastrado com sucesso <=')
            
            }
}
module.exports = {cadastrarUsuario}

