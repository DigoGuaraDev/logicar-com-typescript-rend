const tela = require('readline-sync')

const valor1:number=Number(tela.question('informe o primeiro valor:'))
const valor2:number=Number(tela.question('informe o segundo valor:'))

const resultado:number = Number(valor1) + Number(valor2)

console.log("A soma do"+valor1+ " + " +valor2+" = "+resultado )
