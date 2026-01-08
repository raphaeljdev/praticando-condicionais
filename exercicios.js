// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 3;

const operador = ['+', '-', '*', '/'];

const [soma, subtrai, multiplica, divide] = operador;

const calcula = (operador) => {
  if (operador == soma) {
    return num1 + num2;
  } else if (operador == subtrai) {
    return num1 - num2;
  } else if (operador == multiplica) {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
};

console.log(calcula(subtrai));

// localizar o nivel de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
// $10999 a $7000: 5% de bônus
// $ 6999 a $4008: 7% de bônus
// $3999 p baixo: 9% de bônus

const salario = 7000;

const salarioBonus = () => {
  if (salario >= 11000) {
    console.log(`Bonus referente ao salario (${salario}): ${salario * 0.03}`);
  } else if (salario < 11000 && salario >= 7000) {
    console.log(`Bonus referente ao salario (${salario}): ${salario * 0.05}`);
  } else if (salario < 7000 && salario >= 4008) {
    console.log(`Bonus referente ao salario (${salario}): ${salario * 0.07}`);
  } else if (salario < 4000) {
    console.log(`Bonus referente ao salario (${salario}): ${salario * 0.09}`);
  }
};

salarioBonus();
