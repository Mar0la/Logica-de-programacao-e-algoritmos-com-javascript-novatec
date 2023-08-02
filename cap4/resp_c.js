const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const lado1 = parseFloat(prompt('Escreva o valor do lado A: '));
const lado2 = parseFloat(prompt('Escreva o valor do lado B: '));
const lado3 = parseFloat(prompt('Escreva o valor do lado C: '));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado1 === lado3) {
    console.log('Triângulo Equilátero');
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('Triângulo Isósceles');
  } else {
    console.log('Triângulo Escaleno');
  }
} else {
  console.log('Não é possível formar um triângulo');
}








