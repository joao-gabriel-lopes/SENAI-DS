function ExibirPares() {
    document.getElementById('resultado').innerHTML = ''
    var numero = parseFloat(document.getElementById('numeroInicial').value)
    var limite = parseFloat(document.getElementById('numeroFinal').value)
    var resultado = []
    var contador = numero

    if (!(isNaN(contador)) && !(isNaN(limite))) {
        while (contador <= limite) {
            if (contador % 2 == 0) {
                resultado.push(contador)
            }

            contador++
        }

        for (i = 0; i < resultado.length; i++){
            document.getElementById('resultado').innerHTML += `${resultado[i]} `
        }

    } else {
        document.getElementById('resultado').innerHTML = 'Insira números válidos nos campos acima!'
    }
}