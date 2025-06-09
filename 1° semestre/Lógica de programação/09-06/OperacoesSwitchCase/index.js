function Processar(numero, opcao) {
    document.getElementById('resultado').innerHTML = ''

    if (numero != '' || opcao != '') {
        switch (opcao) {
            case 1:
                ParImpar(numero);
                break;
            case 2:
                Divisores(numero);
                break
            case 3:
                Tabuada(numero);
                break
            case 4:
                ParImpar(numero);
                Divisores(numero);
                Tabuada(numero);
                break
            default:
                document.getElementById('resultado').innerHTML = 'Insira uma opção válida! '
                break
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Insira valores válidos nos campos!'

    }

}

function ParImpar(numero) {
    if (numero % 2 == 0) {
        return document.getElementById('resultado').innerHTML += `O número ${numero} é par <br><br>`

    } else {
        return document.getElementById('resultado').innerHTML += `O número ${numero} é ímpar <br><br>`

    }

}

function Divisores(numero) {
    let divisores = []
    let resposta = ''

    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores.push(i)

        }

    }
    
    resposta += `Os divisores de ${numero} são: `

    for (i = 0; i < divisores.length; i++) {
        if (i == divisores.length - 1){
            resposta += `${divisores[i]} `

        } else {
            resposta += `${divisores[i]}, `

        }

    }

    resposta += '<br><br>'

    return document.getElementById('resultado').innerHTML += resposta

}

function Tabuada(numero) {
    let tabuada = []
    tabuada['numero'] = []
    tabuada['fator'] = []
    tabuada['resultado'] = []

    document.getElementById('resultado').innerHTML += `Tabuada do número: ${numero} <br>`

    for (i = 1; i <= 10; i++) {
        tabuada['numero'].push(numero)
        tabuada['fator'].push(i)
        tabuada['resultado'].push(i * numero)
    }

    table = document.createElement('table')
    table.id = 'tabela'

    tr_th = document.createElement('tr')
    tr_th.id = 'tr_th'

    th1 = document.createElement('th')
    th2 = document.createElement('th')
    th3 = document.createElement('th')
    th1.id = 'th1'
    th2.id = 'th2'
    th3.id = 'th3'

    document.getElementById('resultado').appendChild(table)
    document.getElementById('tabela').appendChild(tr_th)

    document.getElementById('tr_th').appendChild(th1)
    document.getElementById('tr_th').appendChild(th2)
    document.getElementById('tr_th').appendChild(th3)

    document.getElementById('th1').innerHTML = 'Número'
    document.getElementById('th2').innerHTML = 'Multiplicador'
    document.getElementById('th3').innerHTML = 'Produto'

    for (i = 0; i < tabuada['numero'].length; i++) {

        tr = document.createElement('tr')
        tr.id = 'tr' + i

        td1 = document.createElement('td')
        td2 = document.createElement('td')
        td3 = document.createElement('td')
        td1.id = `td${i}1`
        td2.id = `td${i}2`
        td3.id = `td${i}3`

        document.getElementById('tabela').appendChild(tr)

        document.getElementById(`tr${i}`).appendChild(td1)
        document.getElementById(`tr${i}`).appendChild(td2)
        document.getElementById(`tr${i}`).appendChild(td3)


        document.getElementById(`td${i}1`).innerHTML = tabuada['numero'][i]
        document.getElementById(`td${i}2`).innerHTML = tabuada['fator'][i]
        document.getElementById(`td${i}3`).innerHTML = tabuada['resultado'][i]
    }

}