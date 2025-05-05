soma = 0

function adicionarNumero(){
    numero = parseFloat(document.getElementById('numero_soma').value)
    soma += numero
    numero = document.getElementById('numero_soma').value = ''
}

function calcularSoma(){
    document.getElementById('resultado').innerHTML = soma
    soma = 0
}