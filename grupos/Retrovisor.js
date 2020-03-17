const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto1.match(/<(\w+)>.*<\/\1>/g)) 

// o número 1 faz referência ao valor que foi capturado no grupo anterior

const texto2 = 'Lentamente é mente muito lenta.'

console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) 
// ?: faz com que o valor do grupo não fique guardado na memória


console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // substituir utilizando o retrovisor
