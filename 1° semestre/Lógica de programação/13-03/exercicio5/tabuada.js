function calcularTabuada(){
    numero = document.getElementById('numero_tabuada').value
    document.getElementById('resultado').innerHTML = ''
    for(i = 1; i <= 10; i++){
        document.getElementById('resultado').innerHTML += numero + ' x ' + i + ' = ' + numero * i + '<br>'
    }

}