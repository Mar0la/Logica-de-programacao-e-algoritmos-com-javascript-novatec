const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados


const velocidadePermitida = Number(prompt('Escreva a velocidade permitida:'))
const velocidadeCondutor = Number(prompt('Escreva a velocidade do: '))

const multaLeve = (velocidadePermitida * 20) / 100

if(velocidadeCondutor <= velocidadePermitida) {
  console.log('Sem multa')
} else if(velocidadeCondutor  <= multaLeve + velocidadePermitida){
  console.log('Multa leve')
} else {
  console.log('Multa Grave')
}