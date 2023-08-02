const prompt = require("prompt-sync")() 


let numeroChinchilas = Number(prompt('Numero de Chichilas: '))
const numeroAnos = Number(prompt('Numero de anos: '))


for(let i = 0; i < numeroAnos;i++){
  console.log(`${i+1}º Ano: ${numeroChinchilas} Chinchilas`)
  numeroChinchilas  = numeroChinchilas * 3
}