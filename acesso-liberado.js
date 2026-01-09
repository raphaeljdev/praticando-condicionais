// Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.

// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.

let idade = 17;

const verificaIdade = () =>
  idade >= 18 ? 'Acesso liberado.' : 'Acesso negado.';

console.log(verificaIdade());
