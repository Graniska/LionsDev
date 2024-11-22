
    global.prompt = require('prompt-sync')();

    const {adicionarLivro} = require('./adicionar');
    const {listarLivros} = require('./listar');
    const {atualizarLivros} = require('./atualizar');
    const {deletarLivros} = require('./remover');

        function menu() {
         console.log(`===========BIBLIOTECA===========
            (1). Adicionar novo livro
            (2). Listar livros 
            (3). Atualizar livro
            (4). Deletar livro
            (5). Sair`)
            
                let input = prompt(`=> Escolha uma opção: `)

                    switch (input) {
                        case '1':
                            adicionarLivro();
                            menu();
                            break;
                            case '2':
                                listarLivros();
                                menu();
                            break;
                            case '3':
                                atualizarLivros();
                                menu();
                            break;
                            case '4':
                                deletarLivros();
                                menu();
                            break;
                            case '5':
                                console.log('=> Programa encerrando...')
                                return;
                            break;
                    
                        default:
                            console.log('=> Opção inválida, tente novamente')
                            menu();
                            break;
                    }
        }

    menu();
    
    module.exports = { menu};
