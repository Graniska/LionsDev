
const express = require('express');
const criarFilme = require('./criar');
const editarFilme = require('./atualizar');
const deletarFilme = require('./remover');
const listarFilmes = require('./listar');

    const app = express;
    const port = 3000;

    app.use(express.json());

        const criar = require('./criar', criarFilme)
        app.post('/filme', criar)
        
        const listar = require('./listar', listarFilmes);
        app.get('/filme', listar);

        const editar = require('./atualizar', editarFilme);
        app.put('/filmes', editar);

        const remover = require("./remover", deletarFilme);
        app.delete('/filmes', remover)    

        app.get(port, () => (req, res) => {
            res.send('Servidor Express está funcionando')
        })

        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`)
        });