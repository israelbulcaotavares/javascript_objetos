const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["11124234", "33543452356"],
};

// cliente.endereco = {
//     rua: "Rua Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934"
// }

//criando lista de objetos
cliente.endereco = [
  {
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
  {
    rua: "Rua Carc Ban",
    numero: 14337,
    apartamento: false,
    complemento: "ap 9314",
  },
];

cliente.endereco.push({
  rua: "Rua Feish",
  numero: 37,
  apartamento: false,
  complemento: "ap 234",
});

// console.log(cliente);
// console.log(cliente.endereco) //utilizando a notação de ponto
// console.log(cliente["endereco"]) // utilizando notação de colchetes

//filtrar lista
const listaApenasApartamentos = cliente.endereco.filter((endereco) =>  
  endereco.apartamento === true,
//   endereco.numero === 37,
   
   
 );
console.log(listaApenasApartamentos);
