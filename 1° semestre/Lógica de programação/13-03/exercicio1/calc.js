function calcular() {
    valor = document.getElementById('valor_compra').value
    if (valor > 100) {
        valor = valor * 0.9
        document.getElementById('resultado').innerHTML = valor
    } else {
        document.getElementById('resultado').innerHTML = valor
    }
}