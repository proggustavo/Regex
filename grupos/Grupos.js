const texto1 = 'O José Simão é muito engraçado... hehehehehehe'


console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escole.ninja.br google.com.ag'

console.log(texto2.match(/(\w{4}:\/\/)?(\w+\.?)+/g))
