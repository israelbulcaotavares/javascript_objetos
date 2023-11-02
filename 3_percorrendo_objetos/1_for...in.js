const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["11124234", "33543452356"],
};

cliente.endereco = {
  rua: "Rua Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934",
};
//chave   objeto
for (let chave in cliente) {
  // console.log(chave)
  // console.log(cliente[chave])
  // console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}
