/*
        == ---- igual ---- a==b ----]
        verdadeiro se A for igual a B
        == verifica se as variaveis sao iguais, sendo igual retorna true, caso diferente retorna false

        === ---- identico ---- a===b ---- verdadeiro se A for identico(TANTO TIPAGEM QUANTO VALOR DA VARIALVEL) a B

        != ---- diferente ---- a!=b ---- verdadeiro se o A for diferente de B

        !== ---- nao identico ---- a!==b  ---- verdadeiro se o A nao for identico ao B/

        <= ---- menor igual que ---- a<=b ---- verdadeiro quando A for menor ou igual a B

        > ---- maior que ---- a>b ---- verdadeiro quando A for maior que B

        >= ---- maior igual que ---- a>=b ---- verdadeiro quando A for maior ou igual a B
*/



//const a = 3
//const b = 3

//console.log(a==b)

const a = 2
const b = 2

/* 
AND (E) &&
*/

console.log(a === b && a<=b)
//V E V = V

console.log(a === b && a<b)
//V E F = F

console.log(a > b && a===b)
//F E V = F

console.log(a > b && a<b)
//F E F = F

/*
OR (OU) ||
*/

console.log(a === b || a<=b)
//V OU V = V

console.log(a === b || a<b)
//V OU F = V

console.log(a > b || a===b)
//F OU V = V

console.log(a > b || a<b)
//V OU F = F

/*
NOT (NEGAÇÃO) !
*/

console.log(a === b || a<=b)
//V OU V = V