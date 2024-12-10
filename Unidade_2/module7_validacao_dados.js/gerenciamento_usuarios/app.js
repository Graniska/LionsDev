    // declarando pacote prompt responsável pela entrada de dados e declarando seu escopo como global

    const prompt = require('prompt-sync')();
    global.prompt = prompt


    // importando funções para que possam ser acessadas neste módulo
    
    const {cadastrarUsuario} = require('./adicionar');
    const {atualizarUser} = require('./atualizar');
    const {listarUsers} = require('./listar');
    const {removerUser} = require('./remover');
    const {usuarios} = require('./usuarios');
    const {buscarUser} = require('./busca')

    // Declarando a função menu

        function mainMenu() {
            
                console.log(`========Gerenciamento de Usuarios=========
                    (1). Cadastrar Usuário
                    (2). Listar Usuários
                    (3). Atualizar Usuário
                    (4). Buscar Usuário por email
                    (5). Remover Usuário
                    (6). Sair`)

                        let input = prompt('=> Opção: ')

                            switch (input) {
                                case '1':
                                    cadastrarUsuario();
                                    mainMenu()
                                    break;
                                    case '2':
                                    listarUsers();
                                    mainMenu();
                                    break;
                                    case '3':
                                    atualizarUser();
                                    mainMenu();
                                    break;
                                    case '4':
                                    buscarUser();
                                    mainMenu();
                                    break;
                                    case '5':
                                    removerUser();
                                    mainMenu();
                                    break;
                                    case '6':
                                    console.log('-> Programa encerrado')
                                    process.exit();
                                    break;
                            
                                default:
                                    console.log('=> Opção inválida, tente novamente')
                                    break;
                            }
        }
    

        mainMenu()

        module.exports = {mainMenu};
