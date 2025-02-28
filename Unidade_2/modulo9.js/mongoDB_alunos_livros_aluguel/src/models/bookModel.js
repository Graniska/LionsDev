
    const {Schema, model, trusted} = require('mongoose');

        const bookSchema = new Schema ({
            titulo: {
                type: String,
                required: true
            }, 
            autor: {
                type: String,
                required: true
            }, 
            ano: {
                type: Number,
                required: true
            }, 
            genero: {
                type: String,
                required: true
            }
        })