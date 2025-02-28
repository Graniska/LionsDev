const {Schema, model, trusted} = require('mongoose');

const studentSchema = new Schema ({
    nome: {
        type: String,
        required: true
    }, 
    matricula: {
        type: Number,
        required: true
    }, 
    curso: {
        type: String,
        required: true
    }, 
    ano: {
        type: Number,
        required: true
    }
})

module.exports =  model ('Student', studentSchema);