const readSync = require('readline-sync');


console.log("Exercício!\n")
let multiMain = readSync.questionInt("Qual o multiplicador principal? ");

for (multiSec = 0; multiSec <=10; multiSec++){
    console.log(`${multiMain} X ${multiSec} é ${multiMain * multiSec}`);
}