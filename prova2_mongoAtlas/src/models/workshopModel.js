
    const { Schema, model} = require('mongoose');

        const workshopSchema = new Schema ({
            name: {
                type: String,
                required: true
            },
            addres: {
                type: String,
                required: true
            },
            specialties: {
                type: String,
                required: true
            }
        });

        module.exports = model ('Workshop', workshopSchema);