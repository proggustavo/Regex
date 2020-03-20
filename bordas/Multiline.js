const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casa dom Habib
`


console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi)) 
// usando o circunflexo para mostrar que é o início da linha, usa o retrovisor para 
// referenciar o primeiro gurpo e o $ para mostrar que é o final da linha
// o problema é que não pega \n
console.log(texto.match(/^(\w).+\1$/gim))