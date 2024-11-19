//Faça um script em javascript: crie um programa que permita cadastrar um aluno,
// solicitando nome, idade e o curso, na sequência insira-o em um array. Quando o usuário digitar "sair", 
//exiba a lista de alunos cadastrados

const aluno = {
    nome: "",
    idade: "", 
    curso: "",  
};
let alunos = []

        console.log("===CADASTRO DE ALUNOS===")
        console.log("Digite o nome do alunos")
            process.stdin.on('data', function (data){
                let input = data.toString().trim();

                if (!alunos.nome) {
                    alunos.nome = input
                    console.log ("Agora digite a idade do aluno: ")
                } else if (!alunos.idade) {
                    alunos.idade = input
                    console.log ("Agora digite o curso do aluno: ")
                } else if (!alunos.curso) {
                    alunos.curso = input
                    alunos.push(aluno)
                    console.log ("==ALUNO CADASTRADO==")
                    console.log ("Digite 'continuar' ou 'sair' ")
                }  if (input === "sair") {
                            console.log (alunos)
                            process.exit()
                        } else if (input === "continuar") {
                            console.log ("Digite o nome do aluno")
                            aluno = {aluno, idade, curso,}
                        }
                
            })