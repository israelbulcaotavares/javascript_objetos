const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

const guerreiro = { fichaGuerreiro, equipoGuerreiro };
console.log(guerreiro);

const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro } // com operador de espalhamento
console.log(guerreiro2)

console.log("")
console.log("")
console.log("")

const mago = {
  nome: "Gandalf",
  classe: "mago",
};
const guerreiroo = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const ranger = {
  nome: "Legolas",
  classe: "ranger",
};

const personagens = { ...mago, ...guerreiro, ...ranger };
console.log(personagens);
