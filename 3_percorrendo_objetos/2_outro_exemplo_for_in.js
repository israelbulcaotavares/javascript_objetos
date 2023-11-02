const paciente = {
  nome: "James T.",
  idade: 30,
  email: "jt@email.com",
  identicacao: "Alpha01259859",
  funcao: "comandante",
  peso: 80.1,
  altura: 1.8,
  calcularIMC: function () {
    return this.peso / Math.pow(this.altura, 2);
  },
  nomeCompleto: function () {
    console.log(this.nome);
  },
};

// console.log(paciente);

for(let info in paciente) {
    console.log(info)
}
