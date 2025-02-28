
    const express = require('express')
    const mongoose = require('mongoose')
    const app = express()

    mongoose.connect('mongodb+srv://natalygraniska:graniska@provaclustertest.5nmtx.mongodb.net/crud')

        const userSchema = new mongoose.Schema ({
            name: String,
            age: Number
        })
        const userModel = mongoose.model('emp', userSchema);
        const emp1 = new userModel({
            name: 'Nataly',
            age: 19
        }) 
        emp1.save()
        
    app.listen('3000', () => {
            console.log('=> Servidor rodando')
    })