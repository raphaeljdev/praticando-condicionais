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
