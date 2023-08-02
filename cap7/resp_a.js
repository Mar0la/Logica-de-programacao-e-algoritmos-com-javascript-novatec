const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const criptografadas = []
const descriptografadas = []
const asteristico = '**********************************************************************************'
let palavraDigitada =''


function adicionarPlavra() {
  rl.question('Digite a palvra: ', (palavra) => {
    palavraDigitada =  palavra

    
    console.log(`\n${asteristico}\nPlavra Salva\nPalvra: ${palavra}\n${asteristico}\n`);
    exibirMenu();
  });
}
function criptografar() {
  console.log(`\n${asteristico}\nTodos as palvras criptografadas: \n`)

    let palavraCriptografada = "";
    for (let i = 0; i < palavraDigitada.length; i++) {
      
      if (i % 2 === 0) {
        palavraCriptografada += palavraDigitada[i + 1] || ""; 
        palavraCriptografada += palavraDigitada[i];
      }
    }
    criptografadas.push(palavraCriptografada)
 

  console.log(criptografadas) 

  console.log(`${asteristico}`)
  exibirMenu()
}

function descriptografar() {
  console.log(`\n${asteristico}\nTodos as palvras descriptografadas: \n`)

  criptografadas.forEach(element => {
    let descriptografada = "";
    const halfLength = Math.ceil(element.length / 2);
    for (let i = 0; i < halfLength; i++) {
      descriptografada += element[i * 2 + 1] || "";
      descriptografada += element[i * 2];
    }
    descriptografadas.push(descriptografada)
  })
console.log(descriptografadas)
console.log(`${asteristico}`) 
exibirMenu()
}

function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar Palavra\n2 - Criptografar\n3 - Descriptografar\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      adicionarPlavra();
    } else if (opcao === '2') {
      criptografar();
    } else if (opcao === '3') {
      descriptografar();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();