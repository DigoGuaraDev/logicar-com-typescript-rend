
import readline = require('readline-sync') 
console.clear()

let loop:boolean = true
let preço:number = 1
let combos:string[]=['pet Coca com bomba',' Guarana + bomba','bolo + cafe',' cafe com leite']
let comboSelecionados:string[]=[]
let valores:number[]=[]

while(loop){
console.log('combo para lanche')
combos.forEach((combos,index)=> console.log(`${index + 1}-${combos}`))
const opcoes= readline.question()

switch(opcoes){

case "1":
comboSelecionados.push(combos[opcoes - 1 ])
preço = 10,
valores.push(preco)
break 
case "2":
comboSelecionados.push(combos[opcoes -1])
preço = 10
valores.push(preço) 
break 
case "3":
comboSelecionados.push(combos[opcoes -1])
preço = 7,5
valores.push(preço)
break
case "4":
comboSelecionados.push(combos[opcoes -1])
preço = 2,5
valores.push(preço)
break
default:
console.log("Ops! Opção invalida informe de 1 a 4")
} 
const para = readline.questionInt("deseja algo a mais? 1-sim | 2-não")
loop = para !== 2 ? true : false
 
console.log("Resumo do Pedido")
for(let i = 0; i < comboSelecinado.length; i++) {
for(let j= 0; j < valores.length; j++){
 console.log(`${comboSelecionados[i]}........ R$ ${valores[j].toFixed(2)}`)	
 }
}
//let total = 0
//for(let i = 0; i < valores.length; i++ ){
//total += valores[i] 
}
 //let t = 0
//valores.forEach(valores => t += valores)
const totalAcumulado = volores.reduce((acc,valores) => acc + valores)
//console.log("total",t)
//console.log("total com reduce",totalAcumulado)
console.log(`você selecionou ${valores.length}item(ns) seu total é de R$ ${totalAcumulado.toFixed(2)}` )
 


