const dados = require("./cliente.json")

console.log(dados)
console.log(dados.nome)
console.log("")
console.log("")
console.log(typeof dados )
console.log("")
console.log("")


const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
console.log(typeof clienteEmString)

console.log("")

console.log(clienteEmString.nome)

console.log("")
//convertendo de volta para objeto
const objetoCliente =  JSON.parse(clienteEmString)

console.log(objetoCliente)