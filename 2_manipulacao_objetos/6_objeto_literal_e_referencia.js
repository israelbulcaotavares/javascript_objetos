// const objPersonagem = {
//   nome: "Gandalf",
//   classe: "mago",
//   nivel: "20",
// };

// // const objPersonagem2 = objPersonagem;
// // console.log(objPersonagem2)

// const objPersonagem2 = objPersonagem
// objPersonagem2.nome = "Gandalf, o Cinzento"

// console.log(objPersonagem.nome) //Gandalf, o Cinzento
// console.log(objPersonagem2.nome) //Gandalf, o Cinzento

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem2.nome); //Gandalf, o CinzentoCOPIAR CÓD
