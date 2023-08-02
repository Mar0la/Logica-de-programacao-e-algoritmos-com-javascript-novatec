const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const asteristico = '---------------------------------------------------------------------------------'

const valorTempo = Number(prompt('Digite o valor do tempo: '))  
  const  tempoCliente =  Number(prompt('Digite o tempo do cliente: '))
  const extras = Math.ceil(tempoCliente / 15);
  const total  = valorTempo * extras


console.log(`\n${asteristico}\nTotal a pagar ${total}\n${asteristico}\n`)


