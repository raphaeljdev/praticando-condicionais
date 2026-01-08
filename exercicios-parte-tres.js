// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const estudante = {
  nome: 'Roberta',
  nota: 8,
  faltas: 3,
};

const { nome, nota, faltas } = estudante;

nota >= 8 && faltas <= 2
  ? console.log(nome, 'recebe bonus')
  : console.log('Nao recebe bonus');

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const tipoUsuario = 'super premium';

switch (tipoUsuario) {
  case 'free':
    console.log('voce tem acesso limitado no app');
    break;
  case 'premium':
    console.log('voce tem acesso a todas as funcoes');
    break;
  case 'super premium':
    console.log('voce tem acesso total e bonus especiais');
    break;
  default:
    console.log('NAO ENCONTRADO');
    break;
}
