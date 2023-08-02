const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '---------------------------------------------------------------------------------'
let serviços = []


function adicionarServiço() {
  rl.question('Digite o produto para adicionar: ', (serviço) => {
  console.log(`\n${asteristico}\nSERVIÇO ADICIONADO\n\nServiço: ${serviço}\n${asteristico}`)
  serviços.push(serviço)
  clearTerminal()
  listarServiços()
  exibirMenu()
  });
}

function executarServiço() {
  serviços.shift()
  listarServiços()
}

function listarServiços(){
  clearTerminal()
  console.log(`${asteristico}\nSERVIÇOS A SEREM EXECUTADOS ABAIXO  -  SERVIÇOS PENDENTES: ${serviços.length}\n\n${serviços.join(' - ')}\n${asteristico}\n`)
  exibirMenu()
}
function clearTerminal() {
  process.stdout.write('\x1Bc');
}



function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar Serviço\n2 - Exercutar Serviço\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      adicionarServiço();
    } else if (opcao === '2') {
      executarServiço()      
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();