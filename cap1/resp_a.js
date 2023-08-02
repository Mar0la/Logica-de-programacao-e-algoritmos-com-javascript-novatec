const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const asteristico = '---------------------------------------------------------------------------------'
const numero = Number(prompt('Digite um número: '))
console.log(`\n${asteristico}\nSucessor: ${numero+1}\nAntecessor: ${numero-1}\n${asteristico}\n`)



