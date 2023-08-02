const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '---------------------------------------------------------------------------------'
let preçoVacina = ''


function salvarPreço() {
  rl.question('Digite o preço da vacina: ', (preço) => {
  console.log(`\n${asteristico}\nPREÇO SALVO\n\nPreço: R$${preço}\n${asteristico}`)
    preçoVacina = preço
    exibirMenu 
    clearTerminal()
    selecionarConvenio()
  });

  function selecionarConvenio(){
    rl.question(`${asteristico}\nCELECIONE O CONVENIO PARA DESCONTO\n\n1 - Amigo dos Animais\n2 - Saúde Animal\n0 - CASO Não TENHA\n${asteristico}\n`, (opcao) => {
      if (opcao === '1') {
        const desconto = (20 * preçoVacina) / 100
        clearTerminal()
        console.log(`\n${asteristico}\nDESCONTO APLICADO\n\nPreço: R$${preçoVacina - desconto}\n${asteristico}`)
        exibirMenu()
      } else if (opcao === '2') {
        const desconto = (50 * preçoVacina) / 100
        clearTerminal()
        console.log(`\n${asteristico}\nDESCONTO APLICADO\n\nPreço: R$${preçoVacina - desconto}\n${asteristico}`)
        exibirMenu()
      } else if (opcao === '0') {
        const desconto = (10 * preçoVacina) / 100
        clearTerminal()
        console.log(`\n${asteristico}\nDESCONTO APLICADO\n\nPreço: R$${preçoVacina - desconto}\n${asteristico}`)
        exibirMenu()
      }
    })
  }
  
}

function clearTerminal() {
  process.stdout.write('\x1Bc');
}


function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Salvar preço\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      salvarPreço();
    } else if (opcao === '2') {
      obterUltimoNome();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();