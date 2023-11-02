//array 
const nome = [ "André", 32, "055454234534","ciclano@gmail.com" ]
console.log(nome)
console.log(nome[0])
console.log(nome[1])
console.log(nome[2])
console.log(nome[3]) 


console.log("")
//objeto
const cliente = {
//chave e valor, respectivamente   
 nome: "André",
 idade: 32,
 cpf: "055454234534",
 email:  "ciclano@gmail.com"
}
console.log(cliente)
console.log(cliente.nome)
console.log(cliente.idade)
console.log(cliente.cpf)
console.log(cliente.email)

// console.log(`O nome do cliente é ${cliente.nome}, e a idade é ${cliente.idade}. O CPF dele(a) é ${cliente.cpf} e seu email é ${cliente.email}  `)
// console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`)

console.log(`O nome do cliente é ${cliente["nome"]}, e a idade é ${cliente["idade"]}. O CPF dele(a) é ${cliente["cpf"]} e seu email é ${cliente["email"]}  `)
console.log(`Os 3 primeiros dígitos do CPF são ${cliente["cpf"].substring(0, 3)}`)

console.log("")

const chaves = ["nome", "idade", "cpf","email"]
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)

})