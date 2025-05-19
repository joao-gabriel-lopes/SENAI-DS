function SelecionarSalgado() {
    let salgados = []
    let total = 0

    if (document.getElementById('coxinha').checked) {
        salgados.push(['Coxinha', 5.00])
    }

    if (document.getElementById('esfirra').checked) {
        salgados.push(['Esfirra', 6.00])
    }

    if (document.getElementById('quibe').checked) {
        salgados.push(['Quibe', 7.00])
    }

    document.getElementById('resposta').innerHTML = 'Você selecionou: <br>'

    for (i = 0; i < salgados.length; i++){
        document.getElementById('resposta').innerHTML += `${salgados[i][0]} - R$ ${salgados[i][1]} <br>`

        total += salgados[i][1]
    }

    document.getElementById('resposta').innerHTML += `<br> Total: R$ ${total}`

}

function LimparTela(){
    document.getElementById('coxinha').checked = false
    document.getElementById('esfirra').checked = false
    document.getElementById('quibe').checked = false

    document.getElementById('resposta').innerHTML = ''
}