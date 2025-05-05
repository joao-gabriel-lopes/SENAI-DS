function RetornarMultiplos() {
    var numero = parseFloat(document.getElementById('numero').value)
    var limite = parseFloat(document.getElementById('limite').value)
    var multiplos = ''
    var contador = 1

    if ( !(isNaN(numero)) && !(isNaN(limite)) ) {
        while (contador <= limite) {
            if (contador % numero == 0) {
                multiplos = multiplos + ` ${contador}`
            }

            contador += 1
        }

        document.getElementById('resultado').innerHTML = multiplos

    } else {

        document.getElementById('resultado').innerHTML = 'Insira número válidos nos campos acima!'
    }
}