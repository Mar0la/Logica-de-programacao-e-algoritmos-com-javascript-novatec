const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '---------------------------------------------------------------------------------'




function adicionarServiço() {
  rl.question('Informe o preço do produto: ', (produto) => {
  console.log(`\n${asteristico}\nPreço do produto: \n\nProduto: ${produto}\n${asteristico}`)
 
  clearTerminal()

  opçãoDesconto(produto)
  });
}
adicionarServiço()


function clearTerminal() {
  process.stdout.write('\x1Bc');
}



function opçãoDesconto(produto) {
  rl.question('Escolha uma opção de pagamento:\n1 - A vista com 10% de desconto\n2 - 3x sem desconto\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      let desconto = (produto * 10 ) / 100
      let produtoComDesconto = produto - desconto

      console.log(`Você escolheu a primeira opação "A vista com 10% de esconto", o valor do produto é ${produto} com os 10% de desconto fica ${produtoComDesconto}`)
      adicionarServiço()
    } else if (opcao === '2') {
      let parcelas = produto / 3
     
      console.log(`Você escolheu a segunda opação "3x sem desconto", o valor do produto é ${produto} ficando em 3x de ${Math.round(parcelas)}`)    
      adicionarServiço()
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
