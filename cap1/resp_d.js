const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const notaUm = Number(prompt('Digite a primeira nota: '))
const notaDois = Number(prompt('Digite a segunda nota: '))
const media = (notaUm + notaDois) / 2
console.log(`A primeira nota digitada foi ${notaUm} a segunda ${notaDois} a media das 2 notas é: ${media}`)


