
    const {Router} = require('express');

        const {update, index, store, destroy} = require('../controllers/rentController');

            const router = Router();

            router.post('/', store);
            router.get('/', index);
            router.put('/:id', update);
            router.delete('/', destroy);

            module.exports = router;