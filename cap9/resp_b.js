const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '---------------------------------------------------------------------------------'
let produtos = []


function cadastrarProdutos() {
  rl.question('Digite o produto para adicionar: ', (produto) => {
  console.log(`\n${asteristico}\nPRODUTO ADICIONADO NA LISTA\n\nProduto: ${produto}\n${asteristico}\n`)
  produtos.push(produto)
  produtos.sort()
  listarProdutos()
  exibirMenu()
  });
}

function listarProdutos(){
   produtos.forEach(produto => console.log(produto))
   console.log(`${asteristico}\n`)
}



function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - AdicionarProduto\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      cadastrarProdutos();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();