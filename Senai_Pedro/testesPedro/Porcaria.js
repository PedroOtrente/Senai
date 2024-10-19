const readSync = require('readline-sync');
let notas = [];
let quantidadeNotas = readSync.questionInt("Qual a quantidade de notas\n")

for (let i = 0; i < quantidadeNotas; i++){
    let nota = require('readline-sync').questionFloat(`Qual a ${i + 1}° nota?\n`);

    notas.push(nota);
}

let soma = 0

for (let i = 0; i < notas.length; i++){
    soma += notas[i];
}

let resultado = soma / notas.length;
console.log(`A média de notas foi de ${resultado.toFixed(2)}`);
console.log(notas)

/**
 * const readSync = require('readline-sync');


console.log("Exercício!\n")


let notas =[];
let quantidadeNotas = 4;

for (let i = 0; i < quantidadeNotas; i++){
    let nota = readSync.questionFloat(`Qual a ${i + 1}° nota?\n`);

    notas.push(nota);
}

let soma = 0;
for (let i = 0; i < notas.length; i++){
    soma += notas[i];
}

let media = soma / notas.length;

console.log(`A média de notas é: ${media.toFixed(2)}`);

readSync.question("");

console.log("Exercício dois!");

valorTotal = readSync.question("Qual o valor total da venda?\n");
valorFinal =  (valorTotal * 0.9);
console.log(`O valor final foi de ${valorFinal}`);
 */