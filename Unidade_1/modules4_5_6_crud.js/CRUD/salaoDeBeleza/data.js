
let clientes = [
    {Nome: "Ana Maria", CPF: "123.456.789-00", Telefone: "42-1233-1231", email: "ana.maria@gmail.com", idCliente: 1},
    {Nome: "Joao Diaz", CPF: "873.421.232-00", Telefone: "42-2343-1567", email: "joao.diaz@gmail.com", idCliente: 2}
];


let servicos = [
    {tipo: "Corte de cabelo", preco: 50.00, idServico: 1},
    {tipo: "Manicure", preco: 30.00, idServico: 2}, 
    {tipo: "Barba", preco: 25.00, idServico: 3}
];

let agendamentos = [
    {data: "2024-09-01", horario: "14:00", clienteID: 1, servicoID: 1, agendamentoID: 1},
    {data: "2024-09-08", horario: "10:00", clienteID: 2, servicoID: 3, agendamentoID: 2} 
]

module.exports = {clientes, servicos, agendamentos}