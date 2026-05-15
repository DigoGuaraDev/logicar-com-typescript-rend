import readline = require("readline-sync")

const senha:string=readline.question("insira a senha:")
let aprovado: string =""
let recusado: string =""

const jon = true 
const joyboy = true

if (jon <= joyboy)
aprovado = (" aceito")
else
recusado = (" incorreta")

console.log(`${senha} senha esta ${aprovado},${recusado}`)

