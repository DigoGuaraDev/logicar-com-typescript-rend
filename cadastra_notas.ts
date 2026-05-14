import readline = require("readline-sync")

console.clear()

const nomeAluno:string = readline.question("informe o nome do aluno:")
const nota1:number =Number(readline.question("informe a primeira nota:"))
const nota2:number =Number(readline.question("informe a segunda nota:"))
const nota3:number =Number(readline.question("informe a teceira nota:"))
const numeroFaltas:number =Number (readline.question("informe a quantidade de faltas:"))
let  situação :string=""

const media =(nota1 + nota2 + nota3)/3

//A regra, media >= 7 aprovado, se a media for >= 8 e <=7 e faltas < 3, estara recuperação, caso ao contráio reprovado
//e a quatidade de faltas < 5

if(media >=6  && numeroFaltas < 5){
situação = "aprovdo"
}else if (media >= 5 && media < 7 && numeroFaltas < 3)
situação = "aprovad"	
else{
situação = "reprovado"
}
console.log(`Ola ${nomeAluno}! Sua nota é de ${media} e seu total de ${numeroFaltas} faltas, sua situação é de ${situação}`)
