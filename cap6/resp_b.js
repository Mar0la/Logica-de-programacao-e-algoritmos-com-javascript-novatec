const prompt = require("prompt-sync")();

const array = [2, 6, 7, 8, 9];
const numero = Number(prompt('Digite um número: '));

if (!array.includes(numero)) {
  const ultimoElemento = array[array.length - 1];

  if (numero >= ultimoElemento) {
    array.push(numero);
    console.log('Número adicionado ao array:', array);
    console.log('Ordem crescente');
  } else {
    console.log('Fora de ordem crescente');
  }
} else {
  console.log('Item na lista');
}
