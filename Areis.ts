
let frutas:string[] = ["Morango","Banana","Abacaxi","Uva","Pera"]

console.log("frutas",frutas)
console.log("frutas[1]",frutas[1])
console.log("frutas[3]",frutas[3])
console.log("Tamanho da array",frutas.length)
console.log("Utima elemento", frutas[frutas.length - 1])

// carrega lista

for (let i = 0; i < frutas.length; i++)
	console.log(`${ i + 1} - ${frutas[i]}`)
