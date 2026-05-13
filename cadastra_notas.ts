import readline = require("readline-sync")

console.clear()

const nomeAluno:string = readline.question("informe o nome do aluno:")
const nota1:number =Number(readline.question("informe a primeira nota:"))
const nota2:number =Number(readline.question("informe a segunda nota:"))
const nota3:number =Number(readline.question("informe a teceira nota:"))
let  situação :string=""

const media =(nota1 + nota2 + nota3)/3

if(media >=7){
situação = "aprovdo"
} else{
situação = "reprovado"
}
console.log(`Ola ${nomeAluno}! Sua nota é de ${media} e sua situação é de ${situação}`)
