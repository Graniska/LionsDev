
    const Rent = require('../models/rentModel');

        //função criar

            const store = async (req, res) => {
                try {
                    const rent = await Rent.create(req.body);
                    return res.status(201).json(rent);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };


            //função listar 

                const index = async (req, res) => {
                    try {
                        const rent = await Rent.find().exec();
                        return res.status(200).json(rent);
                    } catch (error) {
                        return res.status(400).json({message: error.message});
                    }
                };

                // função atualizar

                const update = async (req, res) => {
                    try {
                        const rent = await Rent.findByIdAndUpdate(req.params.id, req.body).exec();
                        return res.status(200).json(rent);
                    } catch (error) {
                        return res.status(400).json({message});
                    }
                };

                // função deletar 

                    const destroy = async (req, res) => {
                        try {
                            const rent = await Rent.findByIdAndDelete(req.params.id).exec();
                            return res.status(200).json(rent);
                        } catch (error) {
                            return res.status(400).json({message: error.message});
                        }
                    };

                        module.exports = {destroy, update, index, store}