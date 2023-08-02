const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const asteristico = '---------------------------------------------------------------------------------'

  const produto = prompt('Digite o nome do produto: ')
  const preço =  Number(prompt('Digite o preço do produto: '))
  const metade = preço / 2
  const promo1 = preço * 2 + metade

console.log(`\n${asteristico}\n${produto} - Promoção leve 3 por R$${promo1}\n\nO 3° produto custa apenas R$ ${metade}\n${asteristico}\n`)


