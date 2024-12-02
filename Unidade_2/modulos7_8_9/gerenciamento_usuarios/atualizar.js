
        const { mainMenu } = require('./app');
        const { listarUsers } = require('./listar');
        const {usuarios} = require('./usuarios');


            function atualizarUser() {
                
                    listarUsers();

                        let index = +prompt('=> Digite o ID do usuário que deseja atualizar: ')-1

                        let posicao = usuarios.findIndex( user => user.id === index)

                            if (posicao === -1) {
                                console.log('=> ID não encontrado ou inexiste, tente novamente')
                                    mainMenu();
                            } else {

                                    console.log('=> Atualizando dados...')

                                        let newName = prompt('=> Nome: ')
                                        let telefones = [];
                                        let newID = usuarios[usuarios.length -1].id +1
                                        let newPhone;

                                            while(newPhone = prompt('=> Digite o num de telefone ou deixe em branco para sair: '))
                                                if (newPhone == '' ) {
                                                    break;
                                                }

                                        let newEmail = prompt("=> Email: ")
                                                
                                            let seExiste = usuarios.find( user => user.email === newEmail) 

                                                    if (seExiste == -1 ) {
                                                        console.log('=> Ops este email já existe, tente outra vez: ')
                                                        atualizarUser();
                                                    } else {

                                                        usuarios[index] = {id: newID, nome: newName, email: newEmail, telefones: newPhone};

                                                            console.log('=> Usuario atualizado com sucesso !!')
                                                    }
                            }
            }

            module.exports = {atualizarUser};
