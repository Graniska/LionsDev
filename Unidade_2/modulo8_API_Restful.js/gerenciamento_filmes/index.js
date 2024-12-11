const express = require('express');
const criarFilme = require('./criar');
const editarFilme = require('./atualizar');
const deletarFilme = require('./remover');
const listarFilmes = require('./listar');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/filme', criarFilme);
app.get('/filme', listarFilmes);
app.put('/filmes/:id', editarFilme);
app.delete('/filmes/:id', deletarFilme);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
