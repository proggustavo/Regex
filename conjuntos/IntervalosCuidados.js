const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não define range

console.log(texto.match(/[A-z]/g)) // o intervalo usa a ordem da tabela ASCI ou UNICODE (o início da unicode é a asci)

// tem que respeitar a ordem da tabela

// console.log(texto.match(/[a-Z]/g)) // isso causa um erro por estar fora de ordem
//console.log(texto.match(/[4-1]/g)) 