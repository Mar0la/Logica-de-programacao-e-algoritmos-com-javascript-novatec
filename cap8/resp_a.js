const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '-------------------------------------------------------------------------------'
let atleta = {}

function adicionarAtleta() {
  rl.question('Digite o nome: ', (nome) => {
    atleta.nome = nome

    rl.question('Digite a idade: ', (idade) => {
      atleta.idade = Number(idade) 
      console.log(`\n${atleta.nome}\n${asteristico}`)
      categorizarAtleta()
      console.log(`\n\n`)
      exibirMenu();
    });
  });
  
}

function categorizarAtleta() {
  if(atleta.idade <= 12){
    console.log(`Categoria: ifantil`)
  } else if(atleta.idade > 13 && atleta.idade < 18){
    console.log(`Categoria: juvenil`)
  } else {
    console.log(`Categoria: adulto`)
  }
}

function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar Atleta\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      adicionarAtleta();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();