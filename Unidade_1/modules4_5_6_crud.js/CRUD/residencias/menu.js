    const prompt = require('prompt-sync')();
    global.prompt = require('prompt-sync')();

    const {adicionarResidencias} = require('./adicionar');
    const {atualizarResidencias} = require('./atualizar');
    const {listarResidencias} = require('./listar');
    const {removerResidencias} = require('./remover');

    const {Residencias} = require('./data')

    function mainmenu() {
        console.log(`=========Cadastro de Residências========
            (1). Adicionar 
            (2). Listar
            (3). Atualizar
            (4). Remover
            (5). Sair`)

                let opcao = prompt('=> Escolha uma opcao: ')

                    switch (opcao) {
                        case "1":
                            adicionarResidencias()
                            mainmenu();
                            break;
                            case '2':
                            listarResidencias();
                            mainmenu();
                            break;
                            case "3":
                            atualizarResidencias();
                            mainmenu();
                            break;
                            case "4":
                            removerResidencias();
                            mainmenu();
                            break;
                            case "5":
                            console.log('=> Encerrando programa..')
                            return;
                            break;
                    
                        default:
                            console.log('=> Opção inválida, tente novamente')
                            mainmenu();
                            break;
                    }
    }

    mainmenu();
    module.exports = {mainmenu};