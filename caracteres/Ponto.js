// . é um coringa, válido para uma posição apenas

const texto = '1,2,3,4,5,6,7,8,9,0'


console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/g)) // lembrando que o ponto representa dois caracteres, por isso não encontra
console.log(texto.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
console.log(notas.match(/.\../g)) // primeiro um ponto como metacaracter, depois como literal, e depois como metacaracter novamente