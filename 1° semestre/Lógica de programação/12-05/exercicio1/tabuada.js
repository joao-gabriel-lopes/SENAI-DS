function calcularTabuada() {
    let arr_numeros = []
    let arr_resultados = []

    if (document.getElementById('tabuada')) {
        document.getElementById('tabuada').remove()
    }

    let numero = document.getElementById('numero').value

    if (numero < 1 || numero > 100){
        alert('Por favor insira um número entre 1 e 10')

        return
    }

    for (i = 0; i <= 10; i++){
        arr_numeros.push(i)
        arr_resultados.push(i * numero)
    }

    let table = document.createElement('table')
    table.id = 'tabuada'
    document.body.appendChild(table)

    let tabela = document.getElementById('tabuada')

    for (i = 1; i <= 10; i++) {
        let tr = document.createElement('tr')
        tr.id = i

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        td1.id = 'a' + i
        td2.id = 'b' + i
        td3.id = 'c' + i

        tabela.appendChild(tr)
        let linha = document.getElementById(i)
        linha.appendChild(td1)
        linha.appendChild(td2)
        linha.appendChild(td3)

        document.getElementById('a' + i).innerText = numero
        document.getElementById('b' + i).innerText = arr_numeros[i]
        document.getElementById('c' + i).innerText = arr_resultados[i]
    }
    
}


