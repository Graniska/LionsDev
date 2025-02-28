
    // dentro deste modulo vamos inicializar o servidor
    // a requisição vai chegar aqui, e como temos três tipos de serviços
    // fazemos a importação do modulo de cada um, onde as rotas para os metodos se encontram

    const express = require('express');

    require('dotenv').config();

    const studentsRouter = require('./routes/studentsRouter');
    const booksRouter = require('./routes/booksRouter');
    const rentRouter = require('./routes/rentRouter');

    const connectDB = require ('./config.js/db');

    connectDB();

    const app = express();

    app.use(express.json());

    app.use('/student', studentsRouter);
    app.use('/book', booksRouter);
    app.use('/rent', rentRouter);

    app.listen(3000, () => {
        console.log(`=> Servidor rodandoo na porta 3000`)
    })