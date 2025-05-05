numero_certo = Math.floor(Math.random() * 100 + 1)
tentativas = 0

function adivinharNumero(){
    tentativas += 1

    numero = document.getElementById('numero').value

    if(numero < 1 || numero > 100){
        document.getElementById('resultado').innerHTML = 'Insira um número entre 1 e 100!'
        document.getElementById('resultado').className = 'maior'

        return
    }

    if(numero == numero_certo){
        document.getElementById('resultado').innerHTML = 'Número correto!' + '<br>' + 'Número de tentativas: ' + tentativas
        document.getElementById('resultado').className = 'correto'
        tentativas = 0
    }

    if(numero < numero_certo) {
        document.getElementById('resultado').innerHTML = 'Tente um número maior!'
        document.getElementById('resultado').className = 'menor'
    }

    if(numero > numero_certo) {
        document.getElementById('resultado').innerHTML = 'Tente um número menor!'
        document.getElementById('resultado').className = 'maior'
    }
}