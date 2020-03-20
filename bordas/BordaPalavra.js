const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi)) // dia no inicio
console.log(texto1.match(/\w+dia\b/gi)) // dia no final
console.log(texto1.match(/\w+dia\w+/gi)) // dia no meio
console.log(texto1.match(/\bdia\b/gi)) 

// borda é não \w, que é [^A-Za-z0-9_] ... ou seja, caracteres com acento são considerados como borda

const texto2 = 'dia diatônico diafragma média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra!

console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) // sem vírgula