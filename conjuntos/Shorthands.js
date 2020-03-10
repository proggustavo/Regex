const texto = `    -
f_g`

console.log(texto.match(/\d/g)) // número
console.log(texto.match(/\D/g)) // tudo que não é valor numérico [^0-9] como um conjunto negado

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)) // espaços [^ \t\n\r\f]