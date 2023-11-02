/* Nome: um campo de texto com o nome completo do estudante;
Matrícula: um número inteiro;
Curso: um campo de texto contendo o curso atual do estudante;
Matérias: um conjunto de textos contendo apenas os nomes das matérias que o estudante está cursando. */

const estudante = {
  nome: "Carlos Silva Sants",
  matricula: 324345234,
  curso: "Analista e desenvolvimento de sistemas",
  materias: {//tipo 1
    materia1: "Cálculo 1",
    materia2: "Álgebra Linear",
    materia3: "Práticas de Laboratório",
    materia4: "Metodologia",
  },
};


//tipo 2 
const estudante2 = {
  nome: "Carlos Silva Sants",
  matricula: 324345234,
  curso: "Analista e desenvolvimento de sistemas",
  materias: [//tipo 2 
    "Cálculo 1",
    "Álgebra Linear",
    "Práticas de Laboratório",
    "Metodologia",
  ],
};

console.log(estudante);
console.log(estudante2);
