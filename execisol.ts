import readline = require("readline-sync")
interface DadosPessoa

const peso: number;
const altura: number;
 
let classificar IMC(dados:DadosPessoais): string

const imc = dados.peso/dados.altura **2;

if (imc < 18.5)
contição = `IMC: ${ imc.toFixed(2)} A baixo do peso`
else if (imc >= 18.5 && imc < 25)
contição = `IMC: ${ imc.toFixed(2)} Peso normal`

else if (imc >= 25 && imc < 30)
contição = `IMC: ${ imc.toFixed(2)} A cima do peso`

console.log(`infome seu peso ${peso} ,informe sua Altura ${altura} Resultado da sua continção ${contição}`)	
