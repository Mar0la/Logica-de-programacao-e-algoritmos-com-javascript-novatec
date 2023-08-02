const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const num1 = Number(prompt("1º Número: ")) // lê os números 
const num2 = Number(prompt("2º Número: "))

const soma = num1 + num2 // calcula a soma 
console.log(`Soma é: ${soma}`) // exibe o resultado Compare com o Exemplo 1.6 e observe a semelhança! Neste modelo, não é necessário inserir os comandos entre as tags <script> e </script>. Contudo, precisamos acrescentar o comando const prompt = require("prompt-sync")()
console.log()