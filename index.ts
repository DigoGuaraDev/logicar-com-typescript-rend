const tela = require('readline-sync')
//seu nome
const nome: String = tela.queation('Qual é seu nome')
const anoNasc:number = tela.question('Qual o seu ano de nacimento?')
const idade = 2026 - anoNasc
console.log('Ola'+ nome +'a sua idade é'+ idade +'anos.')
