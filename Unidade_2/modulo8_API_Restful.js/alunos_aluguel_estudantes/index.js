
    const express = require('express')
    const port = 2000
    const app = express()

    app.use(express.json());
    
    // ROTAS E FUNÇÕES PARA ALUNOS
    const {atualizarAluno} = require('./alunos/atualizarAluno');
    app.put('/alunos/:id', atualizarAluno);

    const {cadastrarAluno} = require('./alunos/cadastrarAluno');
    app.post('/alunos', cadastrarAluno);

    const {listarAlunos} = require('./alunos/listarAlunos');
    app.get('/alunos', listarAlunos);
 
    const {removerAluno} = require('./alunos/removerAluno');
    app.delete("/alunos/:id", removerAluno);

    //ROTAS E FUNÇÕES PARA LIVROS
    const {atualizarLivro} = require('./livros/atualizarLivro');
    app.put('/livros/:id', atualizarLivro);

    const {cadastrarLivro} = require('./livros/cadastrarLivro');
    app.post('/livros', cadastrarLivro);

    const {listarLivros} = require('./livros/listarLivros');
    app.get('/livros', listarLivros);

    const {removerLivro} = require('./livros/removerLivro');
    app.delete('/livros/:id', removerLivro);   

    //ROTAS ALUGUEL

    const {atualizarAluguel} = require('./aluguel/atualizarAluguel');
    app.put('/aluguel/:id', atualizarAluguel);

    const {criarAluguel} = require('./aluguel/criarAluguel');
    app.post('/aluguel/', criarAluguel);

    const {listarAlugueis} = require('./aluguel/listarAlugueis');
    app.get('/aluguel/', listarAlugueis);

    const {deletarAluguel} = require('./aluguel/deletarAluguel');
    app.delete('/aluguel/:id', deletarAluguel);


    app.listen(port, () => {
        console.log(`Servidor rodando em: http://localhost:${port}`)
    })

//TESTE UM MODULO DE CADA VEZ COMEÇANDO POR LIVROS, EM SEGUIDA ALUNOS E POR FIM ALUGUEL