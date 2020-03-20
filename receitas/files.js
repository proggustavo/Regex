const fs = require('fs')

const read = codigoFonte => {
    return fs.readFileSync(`${__dirname}/originais/${codigoFonte}`, {enconding: 'utf8'})
}

const write = (codigoFonte, conteudo) => {
    const dirname = `${__diname}/alterados`
    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname)
    }
    fs.writeFileSync(`${dirname}/${codigoFonte}`, conteudo, {encoding: 'utf8'})
}

module.exports = {read, write}