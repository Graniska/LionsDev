
    const {livros} = require('../data');

        lastId = livros.length ? Math.max(...livros.map(a => a.id)) : 0;

            function cadastrarLivro(req, res) {
                const livro = {
                    id: lastId +1,
                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    ano: req.body.ano,
                    genero: req.body.genero
                };

                    livros.push(livro);

                        lastId = livro.id;
                        res.status(201).send({mensagem: 'Livro registrado com sucesso', livro : livro});
            }

                module.exports = {cadastrarLivro}