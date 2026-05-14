import readline = require ("readline-sync")

console.log()



const IMC:string = readline.question('informe o seu imc:')
const numeroPeso:number =Number(readline.question('informe o peso:'))
const numeroAltura:number =Number(readline.question('informe a altura'))
let situação: string="" 


const imc = (numeroPeso / numeroAltura) * numeroAltura

if (numeroAltura >= 1.90 && numeroAltura < 1.22)
situação = "normal"
else if (numeroPeso >= 78 && numeroAltura < 1.22)
situação = "normal"
else 
situação = "desnutrido"


console.log(`seu imc  ${imc} seu peso ${numeroPeso} sua altura  ${numeroAltura} sua situação e ${situação}`)
