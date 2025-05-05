function VerificarRadio() {
    let faixaEtaria = ''

    if (document.getElementById('ate14').checked) {
        faixaEtaria = 'criança'

    } else if (document.getElementById('ate24').checked) {
        faixaEtaria = 'jovem'

    } else if (document.getElementById('ate64').checked) {
        faixaEtaria = 'adulto(a)'

    } else if (document.getElementById('65acima').checked) {
        faixaEtaria = 'idoso(a)'

    } else {
        document.getElementById('respostaRadio').innerHTML = 'Insira uma faixa etária!'

        return

    }

    document.getElementById('respostaRadio').innerHTML = `Parabéns, você é ${faixaEtaria}!`
 
}