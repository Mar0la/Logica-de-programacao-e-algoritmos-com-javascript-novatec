
const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const asteristico = '---------------------------------------------------------------------------------'

const medicamento = prompt('Digite o nome do medicamento: ')
const preço = Number(prompt('Digite o Preço: '))
const preçoComDesconto = preço.toFixed() * 2

console.log(`\n${asteristico}\nLeve 2 por ${preçoComDesconto}\n\nPromoção de ${medicamento}\n${asteristico}\n`)



