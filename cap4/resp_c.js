const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados

const valorMoedas = parseFloat(prompt(('valor R$: ')));

const tabelaValores = [
  { valor: 1.00, tempo: 30 },
  { valor: 1.75, tempo: 60 },
  { valor: 3.00, tempo: 120 }
];

let tempoPermanencia = 0;
let troco = 0;
let valorRestante = valorMoedas;

for (let i = tabelaValores.length - 1; i >= 0; i--) {
  const valorAtual = tabelaValores[i].valor;

  while (valorRestante >= valorAtual) {
    tempoPermanencia += tabelaValores[i].tempo;
    valorRestante -= valorAtual;
  }
}

if (valorRestante > 0) {
  troco = valorRestante;
}

if (tempoPermanencia === 0) {
  console.log('Valor Insuficiente');
} else {
  console.log(`Tempo de Permanência: ${tempoPermanencia} min`);
  if (troco > 0) {
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
  }
}