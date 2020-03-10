const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) //dentro do conjunto a maioria dos metacaracteres se comportam como literais
console.log(texto.match(/[$-?]/g)) // isso é um intervalo range

// esse não é intervalo
console.log(texto.match(/[-$?]/g))
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [] ^