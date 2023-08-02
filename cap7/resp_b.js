const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const asteristico = '**********************************************************************************'
let palavraDigitada =''

function adicionarPlavra() {
  rl.question('Digite a palvra: ', (palavra) => {
    palavraDigitada = palavra
    console.log(`\n${asteristico}\nPlavra Salva\nPalvra: ${palavra}\n${asteristico}\n`);
    exibirMenu();
  });
}
function vereficarPalindromo() {
  console.log(`\n${asteristico}\nVereficação de palindromo: \n`)
  let testPalindromo = ''

  for(let i = palavraDigitada.length -1;i >= 0;i--){
    testPalindromo += palavraDigitada[i]
  }
  if(palavraDigitada === testPalindromo){
    console.log(`A palavra ${palavraDigitada} e um palindormo\n${asteristico}`)
    
    exibirMenu()
  } else {
    console.log(`A palavra ${palavraDigitada} não e um palindormo\n${asteristico}`)
    exibirMenu()
  }
}


function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar Palavra\n2 - Vereficar Palindromo\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      adicionarPlavra();
    } else if (opcao === '2') {
      vereficarPalindromo();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();