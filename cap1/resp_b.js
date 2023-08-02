const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const asteristico = '---------------------------------------------------------------------------------'
const valorTotal = Number(prompt('Digite o valor total da pizza:'))
const pessoasPagar = Number(prompt('Digite quantas pessoas vão pagar:'))
const operação = valorTotal / pessoasPagar

console.log(`\n${asteristico}\nO valor total foi ${valorTotal}, a quantidade de pessoais que vão pagar é ${pessoasPagar}, ficando um total de R$${operação} por pessoa.\n${asteristico}\n`)



