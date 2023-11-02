const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["11124234", "33543452356"],
};

cliente.endereco = [
    {
        rua: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
console.log("");
ligaParaCliente(...cliente.telefone); //sintaxe de espalhamento

console.log("");

// const encomenda = {
//   destinatario: cliente.nome,
//   rua: cliente.endereco[0].rua,
//   endereco: cliente.endereco[0].numero,
    
// };
const encomenda = {
  destinatario: cliente.nome,
  ...cliente.endereco[0] //usando o 
    
};

console.log(encomenda);
