function iniciarContagem(){
    document.getElementById('resultado').innerHTML = ''
    for(i = 10; i >= 1; i--){
        document.getElementById('resultado').innerHTML += i + '<br>'
    }
    document.getElementById('resultado').innerHTML += 'Feliz Ano Novo!'

}