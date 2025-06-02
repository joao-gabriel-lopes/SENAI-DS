function Calcular(numero1, numero2, operacao, local_resultado) {

    switch (operacao) {
        case 'adicao':
            local_resultado.innerHTML = numero1 + numero2
            break
        case 'subtracao':
            local_resultado.innerHTML = numero1 - numero2
            break
        case 'multiplicacao':
            local_resultado.innerHTML = numero1 * numero2
            break
        case 'divisao':
            local_resultado.innerHTML = numero1 / numero2
            break
    }

}

function RecarregarPágina() {
    location.reload()
}