
    const prompt = require('prompt-sync')();
    global.prompt = prompt

    //funções Serviço
    const {adicionarServico} = require('./servicos/adicionar')
    const {atualizarServico} = require('./servicos/atualizar')
    const {listarServicos} = require('./servicos/listar')
    const {removerServico} = require('./servicos/remover')
    
    // funções agendamento
    const {adicionarAgendamento} = require('./agendamentos/adicionar');
    const {atualizarAgendamento} = require('./agendamentos/atualizar');
    const {listarAgendamentos} = require('./agendamentos/listar')
    const {removerAgendamento} = require('./agendamentos/remover')
 
    // funções cliente
    const {adicionarCliente} = require('./clientes/adicionar');
    const {listarClientes} = require("./clientes/listar");
    const {removerCliente} = require('./clientes/remover');
    const {atualizarCliente} = require('./clientes/atualizar');
 
           function menu () {
                console.log(`=====Salão de Beleza======
                    (1). Serviços
                    (2). Clientes
                    (3). Agendamentos
                    (4). Sair`)

                    let opcao = prompt('=> Escolha uma opção: ')

                    switch (opcao) {
                        case '1':
                            menuServicos();
                            menu();
                            break;
                            case '2':
                            menuClientes();
                            menu();
                            break;
                            case '3':
                            menuAgendamentos();
                            menu();
                            break;
                            case '4':
                            console.log('=> Programa encerrado')
                            process.exit();
                            break;
                    
                        default:
                            console.log('=> Opção inválida')
                            menu();
                            break;
                    }}

                    function menuServicos() {
                        console.log(`=====SERVIÇOS======
                            (1).Adicionar Serviço
                            (2). Listar Serviços
                            (3). Atualizar Serviço
                            (4). Remover Serviço
                            (5). Menu Principal `)

                                let option = prompt('=> Escolha uma opção: ')

                                switch (option) {
                                    case '1':
                                        adicionarServico();
                                        menu();
                                        break;
                                    case'2':
                                        listarServicos();
                                        menu();
                                    break;
                                    case'3':
                                        atualizarServico();
                                        menu();
                                    break;
                                    case '4':
                                        removerServico();
                                        menu();
                                        break;
                                    case '5':
                                        console.log('=> Voltando ao menu principal..')
                                        menu();
                                    default:
                                        console.log('=> Opção inválida')
                                        break;
                                }
                            }

                            function menuAgendamentos() {
                                console.log(`=====CLIENTES======
                                    (1).Adicionar Agendamento
                                    (2). Listar Agendamento
                                    (3). Atualizar Agendamento
                                    (4). Remover Agendamento
                                    (5). Menu Principal `)
        
                                        let option = prompt('=> Escolha uma opção: ')
        
                                        switch (option) {
                                            case '1':
                                                adicionarAgendamento();
                                                menu();
                                                break;
                                            case'2':
                                                listarAgendamentos();
                                                menu();
                                            break;
                                            case'3':
                                                atualizarAgendamento();
                                                menu();
                                            break;
                                            case '4':
                                                removerAgendamento();
                                                menu();
                                                break;
                                            case '5':
                                                console.log('=> Voltando ao menu principal..')
                                                menu();
                                            default:
                                                console.log('=> Opção inválida')
                                                break;
                                        }
                                    }
                                            function menuClientes() {
                                                console.log(`=====CLIENTES======
                                                    (1).Adicionar Clientes
                                                    (2). Listar Clientes
                                                    (3). Atualizar Clientes
                                                    (4). Remover Clientes
                                                    (5). Menu Principal `)
                        
                                                        let option = prompt('=> Escolha uma opção: ')
                        
                                                        switch (option) {
                                                            case '1':
                                                                adicionarCliente();
                                                                menu();
                                                                break;
                                                            case'2':
                                                                listarClientes();
                                                                menu();
                                                            break;
                                                            case'3':
                                                                atualizarCliente();
                                                                menu();
                                                            break;
                                                            case '4':
                                                                removerCliente();
                                                                menu();
                                                                break;
                                                            case '5':
                                                                console.log('=> Voltando ao menu principal..')
                                                                menu();
                                                            default:
                                                                console.log('=> Opção inválida')
                                                                break;
                                                        }
                                            
                    }
        
                
        menu();

        module.exports ={menu, menuServicos, menuAgendamentos, menuClientes};