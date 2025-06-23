function VerificarPesagem(pesoA, pesoB, sexo) {
    resposta = ''

    if (pesoA != '' && pesoB != '' && sexo != '') {

        switch (sexo) {

            case 'F':

                if (pesoA <= 60 && pesoB <= 60) {
                    resposta = 'Luta justa'

                } else if (pesoA <= 75 && pesoA > 60 && pesoB <= 75 && pesoB > 60) {
                    resposta = 'Luta justa'

                } else if (pesoA > 75 && pesoB > 75) {
                    resposta = 'Luta justa'

                } else {
                    resposta = 'Luta inválida'

                }

                break

            case 'M':

                if (pesoA <= 70 && pesoB <= 70) {
                    resposta = 'Luta justa'

                } else if (pesoA <= 90 && pesoA > 70 && pesoB <= 90 && pesoB > 70) {
                    resposta = 'Luta justa'

                } else if (pesoA > 90 && pesoB > 90) {
                    resposta = 'Luta justa'

                } else {
                    resposta = 'Luta inválida'

                }

                break

            default:
                resposta = 'Insira um sexo válido!'

        }

    } else {
        resposta = 'Insira valores válidos nos campos!'

    }

    document.getElementById('resultado').innerHTML = resposta

}