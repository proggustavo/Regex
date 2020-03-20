const texto = 'Romário era um excelente jogador agora\n, mas hoje é um político questionador'
    
console.log(texto.match(/^r.*$/gi)) // não retorna devido ao \n problema dotall

console.log(texto.match(/^r[\s\S]*r$/gi))