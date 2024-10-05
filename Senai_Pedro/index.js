/**
 * 1 - Nunca iniciar com caracter especial, ecxeti o _(Underline/Underscore)
 * 2 - Nunca iniciar com números 
 * 3 - Nunca separar palavras compostas com espaço
 * 3a - Ao separar palavras, utilizar um dos 3 modelos abaixo:
 *      PascalCase - Toda palavra é iniciada por LetraMaiuscula
 *      camelCase - A partir da segunda palavra, iniciar em letraMaiuscula
 *      snake_case - Separar as palavras por _ (UNDERLINE/UNDERSCORE)
 */

n1 = 8;
n2 = 7;
n3 = 3;
n4 = 5;

function suaMae(n1,n2,n3,n4){
    let media = (n1+n2+n3+n4)/4
    return media
}

let media = suaMae(n1,n2,n3,n4)

console.log(`A média do nosso amigo joãozinho, levando em consideração de que na primeira prova ele tirou
${n1}, na segunda ele tirou ${n2}, na terceira ${n3} e na quarta ${n4}, pelos meus cálculos,
nosso amigo fica com ${media}`)


if (media>=6){
    console.log("O genio passo")
}else{
    console.log("O anta reprovou kkkkkkkk")
}

