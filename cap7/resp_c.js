const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '**********************************************************************************'
let multa = {}

function gravarMulta() {
  rl.question('Digite a data: ', (data) => {
    multa.data = new Date(data)
    console.log(`\n${asteristico}\nData Salva\nData: ${data}\n${asteristico}\n`);

    rl.question('Digite o valor da multa: ', (valor) => {
      multa.valor = Number(valor) 
      console.log(`\n${asteristico}\nValor da multa Salvo\nValor: ${valor}\n${asteristico}\n`);
      exibirMenu();
    });
  });
  
}
function calcular() {
  const dataLimite =  new Date(multa.data)
  dataLimite.setDate(dataLimite.getDate()+90)

  const valorComDesconto = multa.valor * 0.8;

  console.log(`\n${asteristico}\nPode pagar até: ${dataLimite.toLocaleDateString("pt-BR")}\nDesconto de: ${valorComDesconto.toFixed(2)}\n${asteristico}\n`)
  
}
function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar multa\n2 - Vereficar data e desconto \n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      gravarMulta();
    } else if (opcao === '2') {
      calcular();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();