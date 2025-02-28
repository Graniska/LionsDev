
    const Student = require('../models/studentModel');

        //função criar

            const store = async (req, res) => {
                try {
                    const student = await Student.create(req.body);
                    return res.status(201).json(student);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };


            //função listar 

                const index = async (req, res) => {
                    try {
                        const student = await Student.find().exec();
                        return res.status(200).json(student);
                    } catch (error) {
                        return res.status(400).json({message: error.message});
                    }
                };

                // função atualizar

                const update = async (req, res) => {
                    try {
                        const student = await Student.findByIdAndUpdate(req.params.id, req.body).exec();
                        return res.status(200).json(student);
                    } catch (error) {
                        return res.status(400).json({message});
                    }
                };

                // função deletar 

                    const destroy = async (req, res) => {
                        try {
                            const student = await Student.findByIdAndDelete(req.params.id).exec();
                            return res.status(200).json(student);
                        } catch (error) {
                            return res.status(400).json({message: error.message});
                        }
                    };

                        module.exports = {destroy, update, index, store}