
    const { Router } = require('express')

        const { store, index, update, destroy} = require('../controllers/vehicleController');

            const router = Router();

            router.post('/', store);
            router.put('/:id', update);
            router.delete('/:id', destroy);
            router.get('/', index);

            module.exports = router;