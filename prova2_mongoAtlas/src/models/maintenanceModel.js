
    const { Schema, model, trusted} = require('mongoose');

        const maintenanceSchema = new Schema ({
            /*workshop: {
            type: Schema.Types.ObjectId,
            ref: 'Workshop,
            required: true},
            */vehicle: {
                type: Schema.Types.ObjectId,
                ref: "Vehicle",
                required: true
            }, 
            services: [{
                type: Array,
                required: true,
                name: {
                    type: String,
                    required: true
                }, 
                price: {
                    type: Number,
                    required: true
                }
            }],
            date: {
                type: Date,
                required: true
            },
            totalCost: {
                type: Number,
                required: true
            }
    });

        module.exports = model('Maintenance', maintenanceSchema);