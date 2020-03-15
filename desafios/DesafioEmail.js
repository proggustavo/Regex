const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_sailva@registro.br
    - rafa.sampaio@yahoo.com`

//console.log(texto.match(/\w+@\w+(\.\w+)+/g))
console.log(texto.match(/[\w.]+@(\w+\.?)+/g))
//console.log(texto.match(/[\w.]+@(\w+\.?)+/g))