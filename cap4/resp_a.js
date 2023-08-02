

const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const asteristico = '---------------------------------------------------------------------------------'

const numero = Number(prompt('Digite um número: '))
if(numero % 2 === 0){
  console.log(`${asteristico}\nO número é par\n${asteristico}`)
} else {
  console.log(`${asteristico}\nO número é impar\n${asteristico}`)

}




