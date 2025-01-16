// importando bibliotecas que serão utilizadas no programa
const express= require('express')
const mongoose = require("mongoose")

//constante que irá instanciar o express
const app = express();


    // realizando a conexão com o banco de dados remoto
    mongoose.connect("mongodb+srv://natalygranisk:graniska@clusterprova.509bg.mongodb.net/prova")
        .then(() => console.log('Conectado ao MongoDB'))
        .catch ((error) => console.log('Erro ao conectar ao MongoDb', error))


    // importando os roteadores, pois estaremos instanciando-os neste modulo nos middlewares
    const maintenanceRouter = require('./routers/maintenanceRouter');
    const vehicleRouter = require('./routers/vehicleRouter');
    const workshopRouter = require('./routers/workshopRouter');


    //middleware responsável por verificar o formato das requisições
    app.use(express.json());
    
    // declarando os middlewares responsaveis por filtrar a mesma de acordo com o tipo da requisição
    app.use('/workshop', workshopRouter);
    app.use('/vehicle', vehicleRouter);
    app.use('/maintenance', maintenanceRouter);

    app.listen(4000, () => {
        console.log('=> Servidor Rodando na porta 4000')
}); 