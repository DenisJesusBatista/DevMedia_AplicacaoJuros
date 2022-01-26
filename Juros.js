import entradaDados from 'readline-sync';

console.log('Aplicação de Juros: ');

let valor_divida = entradaDados.question("\nInforme o valor devido:  R$");
let dias_vencimento = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto:");

console.log("\nValor original da dívida: R$ " + valor_divida);
console.log("\nDias atrasados: " + dias_vencimento);
console.log("Taxa de Juros: 0%");
console.log("Valor total com juros: R$ 0");