const { usuarios } = require("./usuarios");

function buscarUser() {
    let email = prompt('=> Digite o email do usuário que deseja encontrar: ')

    let encontrarUser = usuarios.find(user => user.email === email)

        if (encontrarUser) {
            console.log(`
                | ID: ${encontrarUser.id}
                | Nome: ${encontrarUser.nome}
                | Email: ${encontrarUser.email}
                | Telefone: ${encontrarUser.telefones}`)
        } else {
            console.log('=> Email não encontrado ou inexistente, tente novamente')
            buscarUser();
        }
}

module.exports = { buscarUser };
