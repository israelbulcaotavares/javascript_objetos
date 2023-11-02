const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20456456",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};

console.log(objPersonagem)

delete objPersonagem.aliado
console.log(objPersonagem.aliado) //removido




/* 
O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. 
Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma 
propriedade que não existe no objeto:
*/

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true