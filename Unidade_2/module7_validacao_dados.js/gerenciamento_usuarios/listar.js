
const {usuarios} = require('./usuarios');

        function listarUsers() {
            
            console.log('======Listagem======')

                usuarios.forEach((objeto, index) => {
                    
                        console.log(`=========================
                            |id:${objeto.id}
                            |Nome: ${objeto.nome}
                            |Email: ${objeto.email}
                            |Telefones (${objeto.telefones.length}):  ${objeto.telefones}`)
                });
        }

    module.exports = {listarUsers};



























