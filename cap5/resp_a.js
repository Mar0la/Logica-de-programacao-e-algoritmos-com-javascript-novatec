const prompt = require("prompt-sync")() 

const nomeFruta = prompt('Escreva o nome de uma fruta:')
const numeroRepetições = Number(prompt('Escreva o  número de repetições:'))
let frutaRepetida = '';

for (let i = 0; i < numeroRepetições; i++) {
  frutaRepetida += nomeFruta + ' * ';
}

const novaString = frutaRepetida.slice(0, -3)

console.log(novaString);


