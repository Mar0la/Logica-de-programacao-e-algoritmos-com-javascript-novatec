const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const asteristico = '-------------------------------------------------------------------------------'
let nomeSalvo = ''
let ultimoNome = ''
let qtdVogais = 0
function validarNome() {
  rl.question('Digite o nome: ', (nome) => {
    
    if(!(nome.length >0)){
      console.log(`\n${asteristico}\nNOME INVALIDO\n${asteristico}\n`)
      exibirMenu()
    } else {
      console.log(`\n${asteristico}\nNOME VALIDO\n\nNome: ${nome}\n${asteristico}\n`)
      nomeSalvo = nome
      exibirMenu()
    }  
  });
}

function obterUltimoNome() {
  let nomeSperado = nomeSalvo.split(' ')
  ultimoNome = nomeSperado[nomeSperado.length -1].toLocaleLowerCase()
  console.log(`\n${asteristico}\nULTIMO NOME OBTIDO E TRANSFORMADO EM LETRAS MINUSCULAS\n\nUltimo Nome: ${ultimoNome}\n${asteristico}\n`)
  exibirMenu()
}

function contadorDeVogais() {
  qtdVogais = nomeSalvo.match(/[aeiou]/gi).length
  console.log(`\n${asteristico}\nVOGAIS CONTADAS COM SUCESSO\n\nQuantidade de vogais: ${qtdVogais}\n${asteristico}\n`)
  exibirMenu()
}

function gerarSenha(){
  let senha = ultimoNome + qtdVogais
  console.log(`\n${asteristico}\nSENHA GERADA COM SUCESSO\n\nSenha: ${senha}\n${asteristico}\n`)

}

function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Validar nome\n2 - Obter Ultimo Nome\n3 - Contar vogais\n4 - Gerar senha\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      validarNome();
    } else if (opcao === '2') {
      obterUltimoNome();
    } else if (opcao === '3') {
      contadorDeVogais()
    } else if (opcao === '4') {
      gerarSenha()
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}
exibirMenu();