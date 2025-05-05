function ExibirPares() {
    var numero = parseFloat(document.getElementById('numeroInicial').value)
    var limite = parseFloat(document.getElementById('numeroFinal').value)
    var resultado = ''
    var contador = numero

    if (!(isNaN(contador)) && !(isNaN(limite))) {
        while (contador <= limite) {
            if (contador % 2 == 0) {
                resultado += `${contador} `
            }

            contador++
        }

        document.getElementById('resultado').innerHTML = resultado

    } else {
        document.getElementById('resultado').innerHTML = 'Insira números válidos nos campos acima!'
    }
}