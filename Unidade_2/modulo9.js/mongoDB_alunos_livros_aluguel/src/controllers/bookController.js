
    const book = require('../models/bookModel');

        const store = async (req, res) => {
            try {
                const book = await book.create(req.body);
                return res.status(201).json(book);
            } catch (error) {
                return res.status(400).json({mensagem: error.message});
            }
        };

        // função listar

            const index = async (req, res) => {
                try {
                    const books = await book.find().exec();
                    return res.status(200).json(books);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };

            //função atualizar 

                const update = async (req, res) => {
                    try {
                        const book = await book.findByIdAndUpdate(req.params.id, req.body).exec();
                        return res.status(200).json(book);
                    } catch (error) {
                        return res.status(400).json({message: error.message});
                    }
                };

                // função deletar  

                    const destroy = async (req, res) => {
                        try {
                            const book = await book.findByIdAndDelete(req.params.id).exec();
                            return res.status(200).json(book);
                        } catch (error) {
                            return res.status(400).json({message: error.message})
                        }
                    };

                    module.exports = {destroy, update, index, store};
