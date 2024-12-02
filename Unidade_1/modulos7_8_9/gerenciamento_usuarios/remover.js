const { mainMenu } = require("./app");
const { listarUsers } = require("./listar")
const {usuarios} = require("./usuarios")

    function removerUser() {
        
            listarUsers();

                let index = +prompt('=> Digite o id do usuário que deseja remover: ') 

                    let posicao = usuarios.findIndex( user => user.id === index) 

                        if (posicao === -1 || usuarios.length === 0) {
                            
                                console.log('=> ID não encontrado ou inexistente, tente novamente: ')

                                    mainMenu();
                        } else {

                                usuarios.splice(posicao, 1)

                                    console.log('=> Usuário removido com sucesso <=')
                        }
    }

        module.exports = {removerUser};





        