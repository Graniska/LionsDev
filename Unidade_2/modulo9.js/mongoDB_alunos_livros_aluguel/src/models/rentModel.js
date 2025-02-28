
const {Schema, model, trusted} = require('mongoose');

const rentSchema = new Schema ({
    bookID: {
        type: String,
        required: true
    }, 
    studentID: {
        type: String,
        required: true
    }, 
    rentDate: {
        type: Number,
        required: true
    }, 
    devolutionDate: {
        type: Number,
        required: true
    }
})

module.exports =  model ('Rent', rentSchema);