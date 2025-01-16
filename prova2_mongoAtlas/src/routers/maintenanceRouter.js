
    //importando o roteador
    const { Router } = require('express');

    //importando as funções, pois precisamos da referenciá-las neste modulo
    // para que a API consiga redirecionar a requisição para o módulo controller

    const {store, index, update, destroy} = require('../controllers/maintenanceController');

    //instanciando o roteador
        const router = Router();

        router.post('/', store); // req do tipo criar será direcionada para a função store
        router.get('/', index); // req do tipo listar
        router.put('/:id', update); //req do tipo atualizar
        router.delete('/:id', destroy); // req do tipo deletar

        module.exports = router;