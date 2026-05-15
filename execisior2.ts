import readline = require("readline-sync")

console.clear()

const nomeEstudande:string = readline.question("informe seu nome")
const nota1: number =Number (readline.question("sua nota é:"))
const nota2: number =Number (readline.question("sua nota é:"))
const nota3: number =Number (readline.question("sua nota é:"))
let contição: string=""

const media =(nota1 + nota2 + nota3 )/3

if (media >=6)
contição = "aprovado"
else if (media >6 && media <7)
contição = "aprovado"
else	
contição = "reprovado"

console.log(`aOla Aluno ${nomeEstudande}!sua nota atual ${media} sua situação é de ${contição}`) 

