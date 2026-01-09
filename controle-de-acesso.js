// Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

// Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."

let carrinhoVazio = true;

const verificaCarrinho = () => {
  carrinhoVazio == !true
    ? console.log('Compra finalizada com sucesso')
    : console.log('Nao eh possivel finalizar a compra com o carrinho vazio');
};

verificaCarrinho();
