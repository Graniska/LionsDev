
    const { Schema, model } = require('mongoose');

        const vehicleSchema = new Schema ({
            plate: {
                type: String,
                required: true
            }, 
            model: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true
            }/* 
            maintenances: {
                type: [Schema.Types.ObjectId],
                ref: 'Maintenance', //MAINTENANCE PODE SER COM M MAIÚSCULO, FAZER O TESTE
                required: false
            }*/
        });

            module.exports = model ('Vehicle', vehicleSchema);