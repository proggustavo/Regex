const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files.js')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i

let codigo = texto.match()