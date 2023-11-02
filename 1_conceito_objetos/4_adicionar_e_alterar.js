const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",

} 

console.log(pessoa.nome) 

console.log(pessoa.telefone)

pessoa.telefone = "11 223 45435"

console.log(pessoa.telefone)

pessoa.nome = "Luma Silva"

console.log(pessoa)

//const novaPessoa = pessoa // não é possivel manipular com constante sobre um objeto. Sò dentro de um objeto que é possivveel manipular
//ou seja,   podem ter seu CONTEUDO INTERNO alterado.
