const verificaBissexto = (ano = 1988) => {
  (ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0
    ? console.log('O ano', ano, 'eh bissexto')
    : console.log('O ano', ano, 'nao eh bissexto');
};

verificaBissexto(2000);
