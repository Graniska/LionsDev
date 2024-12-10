
                const {livros} = require("./data")

                function listarLivros() {
                    
                       if (livros === 0) {
                        console.log('=> Não há livros ha serem listados')
                       } else {
                        livros.forEach((objeto, index) => {
                            
                            console.log(`
                                |Livro ID: ${index +1}
                                |Nome: ${objeto.nome}
                                |Autor: ${objeto.autor}
                                |Gênero: ${objeto.genero}
                                |Páginas: ${objeto.paginas}`)
    
                    });
                       }
        
                }
        
                    module.exports = {listarLivros}
