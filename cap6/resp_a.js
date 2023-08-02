const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const times = []
const asteristico = '**********************************************************************************'

function timeJaExiste(time) {
  return times.some(element => element === time);
}

function adicionarTime() {
  rl.question('Digite o nome do time: ', (time) => {
    if (timeJaExiste(time)) {
      console.log(`\n${asteristico}\nTime ${time} já está presente na lista.\n${asteristico}\n`)
      exibirMenu();
      return;
    }

    times.push(time);
    console.log(`\n${asteristico}\nTime adicionado\nNome: ${time}\n${asteristico}\n`);
    exibirMenu();
  });
}
function listarTimes() {
  console.log(`\n${asteristico}\nTodos os Times inscritos: \n`)
  if(times.length === 0){
    console.log(`Nenhum Time inscrito.\n${asteristico}\n`);
    exibirMenu()
  }
  times.forEach(time => console.log(`${time}`))
  console.log(`${asteristico}\n`)
  exibirMenu()
}

function montarTabela() {
  if(times.length % 2 !== 0){
    console.log(`\n${asteristico}\n\n O número de times é impar, impossivel gerar tabela, porfavo adicionar mais 1 time.\n\n${asteristico}\n`)
    exibirMenu()
  } else {
    for(let index = 0; index < Math.floor(times.length/2);index++){
    console.log(`${times[index]} vs ${times[times.length - 1 - index]}`)
    }
    exibirMenu()
  }

}

function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar Time\n2 - Listar times\n3 - Montar tabela de Jogos\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      adicionarTime();
    } else if (opcao === '2') {
      listarTimes();
    } else if (opcao === '3') {
      montarTabela();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();