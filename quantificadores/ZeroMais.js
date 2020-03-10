const texto1 = `De longe eu avistei o fogo
 e uma pessoa gritando: FOGOOOOO!`

const texto2 = `De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!`

// ? -> zero ou um (opcional) - no exemplo abaixo a letra que está ao lado do quantificador pode ou não estar presente no texto, 
// e ele vai retornar da mesma forma
const regex = /fogo?/gi 

//console.log(texto1.match(regex))
//console.log(texto2.match(regex))
console.log(texto1.match('fogo(.+)'))
console.log(texto2.match('fogo(.+?)'))