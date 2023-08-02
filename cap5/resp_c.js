const prompt = require("prompt-sync")() 

const numero = Number(prompt('Digite um número: '))
let inteiros = []
let soma = 0

for(let i = 0; i < numero;i++){
  if(numero % i == 0){
    inteiros.push(i)
  }
}
for(let i in inteiros){
  soma += inteiros[i]
  
}
console.log(`Divisores do ${numero}: ${inteiros} (Soma:${soma})\n${numero} é um Número Perfeito.`)