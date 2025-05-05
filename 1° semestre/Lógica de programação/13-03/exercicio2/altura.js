function calcularAltura(){
    altura = document.getElementById('altura').value
    if(altura > 1.50){
        document.getElementById('resultado').innerHTML = 'Entrada autorizada'
    } else{
        document.getElementById('resultado').innerHTML = 'Tente novamente no ano que vem'
    }
}