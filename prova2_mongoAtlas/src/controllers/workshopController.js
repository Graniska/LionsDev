
    const Workshop = require("../models/workshopModel");

        const store = async (req, res) => {
            try {
                const workshop = await Workshop.create(req.body);
                return res.status(201).json(workshop);
            } catch (error) {
                return res.status(400).json({message: error.message})
            }
        };

        //função listar
        const index = async (req, res) => {
            try {
                const workshops = await Workshop.find().exec();
                return res.status(200).json(workshops);
            } catch (error) {
                return res.status (400).json({message: error.message});
            }
        };

        //função atualizar 
        const update = async (req, res ) => {
            try {
                const workshop = await Workshop.findByIdAndUpdate(req.param.id, req.body).exec()
                return res.status(201).json(workshop);
            } catch (error) {
                return res.status(400).json({message: error.message})
            }
        };

        //função deletar 
        const destroy = async (req, res) => {
            try { 
                const workshop = await Workshop.findByIdAndDelete(req.params.id).exec();
                return res.status(200).json(workshop)
            } catch (error) {
                return res.status(400).json({message: error.message});
            }
        };

        module.exports = {destroy, store, index, update};