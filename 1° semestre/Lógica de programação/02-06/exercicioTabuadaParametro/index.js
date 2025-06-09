function GerarTabuada(numero, inicio, fim) {

    if (document.getElementById('tabela')) {
        document.getElementById('tabela').remove()
    }

    let tabuada = []
    tabuada['numero'] = []
    tabuada['fator'] = []
    tabuada['resultado'] = []

    if (isNaN(numero) || isNaN(inicio) || isNaN(fim)) {
        document.getElementById('resultado').innerHTML = 'Insira números válidos nos campos!'

        return
    }

    if (inicio > fim) {
        document.getElementById('resultado').innerHTML = 'O início da tabuada deve ser menor que o fim da tabuada!'

        return
    }

    document.getElementById('resultado').innerHTML = `Tabuada do número: ${numero} <br>`
    document.getElementById('resultado').innerHTML += `Intervalo da tabuada: De ${inicio} até ${fim}`

    for (i = inicio; i <= fim; i++) {
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


function RecarregarPágina() {
    window.location.reload();

}