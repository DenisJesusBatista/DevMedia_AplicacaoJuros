import entradaDados from 'readline-sync';

console.log('Aplicação de Juros: ');

let taxa_Juros;

let valor_divida = entradaDados.question("\nInforme o valor devido:  R$");

if (valor_divida <= 0) {
    console.log("\nValor original da dívida: R$ " + valor_divida);
    console.log("O valor da dívida deve ser maior que zero!\n");
} else {
    console.log("\nValor original da dívida: R$ " + valor_divida);
}


let dias_vencimento = entradaDados.question("Informe dias se passaram do vencimento: ");
if (dias_vencimento <= 0) {
    console.log("\nDias atrasados: " + dias_vencimento);
    console.log("Você está em dia!\n");
} else {
    console.log("\nDias atrasados: " + dias_vencimento);
}



// if (dias_vencimento <= 15)
//     taxa_Juros = 5;
// else if (dias_vencimento > 15)
//     taxa_Juros = 10;


let taxa = dias_vencimento >= 15 ? 10 : 5; /*If ternário*/

let valor_Juros = (valor_divida / 100) * taxa;
let totalDivida = Number(valor_divida) + Number(valor_Juros);





// console.log("Dias atrasados: " + dias_vencimento);
console.log("Taxa de Juros: " + taxa + "%");
console.log("Valor total com juros: R$ " + totalDivida);