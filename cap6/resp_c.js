const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const candidatos = [];
const candidatosAprovados = [];
const asteristico = '*****************************************************'

function candidatoJaExiste(nome) {
  return candidatos.some(candidato => candidato.nome === nome);
}
function adicionarCandidato() {
  rl.question('Digite o nome do candidato: ', (nome) => {
    if (candidatoJaExiste(nome)) {
      
      console.log(`\n${asteristico}\nCandidato ${nome} já está presente na lista.\n${asteristico}\n`)
      exibirMenu();
      return;
    }

    rl.question('Digite o número de acertos: ', (acertos) => {
      acertos = parseInt(acertos);

      candidatos.push({ nome, acertos });
      console.log(`\n${asteristico}\nCandidato adicionado\nNome: ${nome}, Acertos: ${acertos}\n${asteristico}\n`);

      exibirMenu();
    });
  });
}
function mostrarAprovados() {
  rl.question('Digite o número de acertos para aprovação: ', (notaAprovacao) => {
    notaAprovacao = parseInt(notaAprovacao);

    candidatosAprovados.length = 0; // Limpa o array de candidatos aprovados

    candidatos.forEach(candidato => {
      if (candidato.acertos >= notaAprovacao) {
        candidatosAprovados.push(candidato);
      }
    });

    candidatosAprovados.sort((a, b) => b.acertos - a.acertos); // Ordena em ordem decrescente de acertos

    console.log(`\n${asteristico}\nCandidatos Aprovados: `);

    if (candidatosAprovados.length > 0) {
      candidatosAprovados.forEach(aprovado => {
        console.log(`${aprovado.nome} - Acertos: ${aprovado.acertos}\n${asteristico}\n`);
      });
    } else {
      console.log(`Nenhum candidato aprovado.\n${asteristico}\n`);
    }

    rl.question('Pressione Enter para continuar...', () => {
      exibirMenu();
    });
  });
}

function listarCandidatos() {
  console.log(`\n${asteristico}\nTodos os candidatos inscritos:`);
  if (candidatos.length > 0) {
    candidatos.forEach(candidato => {
      console.log(`${candidato.nome} - Acertos: ${candidato.acertos}\n${asteristico}\n`);
    });
  } else {
    console.log(`Nenhum candidato inscrito.\n${asteristico}\n`);
  }
  rl.question('Pressione Enter para continuar...', () => {
    exibirMenu();
  });
}

function exibirMenu() {
  rl.question('Escolha uma opção:\n1 - Adicionar Candidato\n2 - Mostrar Aprovados 2ª Fase\n3 - Listar Todos os Candidatos\n0 - Sair\n', (opcao) => {
    if (opcao === '1') {
      adicionarCandidato();
    } else if (opcao === '2') {
      mostrarAprovados();
    } else if (opcao === '3') {
      listarCandidatos();
    } else if (opcao === '0') {
      console.log(`\n${asteristico}\nEncerrando o programa.\n${asteristico}\n`);      rl.close();
    } else {
      console.log(`\n${asteristico}\nOpção inválida.\n${asteristico}\n`);
      exibirMenu();
    }
  });
}

exibirMenu();
