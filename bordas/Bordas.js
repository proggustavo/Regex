const texto = 'Romário era um excelente jogador agora\n, mas agora é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // inicio da linha ou string
console.log(texto.match(/r$/gi)) // final da linha ou string    
console.log(texto.match(/^r.*$/gi)) // não retorna devido ao \n problema dotall