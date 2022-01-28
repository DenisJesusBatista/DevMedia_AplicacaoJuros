import entradaDados from 'readline-sync';

console.log('Aplicação de Juros: ');

let taxa_Juros = 0;

let valor_divida = 100;


let valor_divida = entradaDados.question("\nInforme o valor devido:  R$");

let dias_vencimento = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto:");


if (Number(dias_vencimento) < 15) {
    Number(taxa_Juros) = 10
} else {
    Number(taxa_Juros) = 15
}

let

    let valor_Juros = (valor_divida / 100) * taxa_Juros;
let totalDivida = valor_divida + valor_Juros;

console.log("\nValor original da dívida: R$ " + valor_divida);
console.log("\nDias atrasados: " + dias_vencimento);
console.log("Taxa de Juros: " + taxa_Juros);
console.log("Valor total com juros: R$ " + totalDivida);


// let valorDivida = 100;
// let juros = 100;

// let valorJuros = (valorDivida / 100) * juros;
// let totalDivida = valorDivida + valorJuros;

// console.log(totalDivida);