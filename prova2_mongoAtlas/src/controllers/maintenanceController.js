
    const Maintenance = require('../models/maintenanceModel')

        //função CRIAR
        const store = async (req, res) => {
            try {
                const maintenance = await Maintenance.create(req.body);
                return res.status(201).json(maintenance);
            } catch (error) {
                return res.status(400).json({message: error.message})
            }
        };

        // função listar 
        const index = async (req, res) => {
            try {
                const maintenance = await Maintenance.find().exec();
                return res.status(200).json(maintenance);
            } catch (error) {
                return res.status(400).json({message: error.message});
            }
        };

        // função atualizar

        const update = async (req, res) => {
            try {
                const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
                return res.status(200).json(maintenance);
            } catch (error) {
                return res.status(400).json({message: error.message});
            }
        };

        //função deletar

            const destroy = async (req, res) => {
                try {
                    const maintenance = await Maintenance.findByIdAndDelete(req.paramss.id).exec();
                    return res.status(200).json(maintenance);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };

            module.exports = {destroy, update, index, store}
