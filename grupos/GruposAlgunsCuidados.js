const texto = 'Pedrinho (filho Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) // dentro de um conjunto o grupo não existe
console.log(texto.match(/([abc])/gi)) // um conjunto dentro de um grupo funciona
console.log(texto.match(/(abc)/gi))
