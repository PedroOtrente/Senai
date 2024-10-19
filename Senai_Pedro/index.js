const readSync = require('readline-sync')

let idade = readSync.question("Quantos anos você tem?\n")

if (idade < 16){
    console.log("Tu não pode fazer nada KKK")
} else if(idade = 16 && idade <21){
    console.log("Tu pode só dirigir")
}else{
    console.log("Tá liberado tudoo")
}