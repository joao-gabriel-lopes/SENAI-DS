function calcularTabuada() {

    if (document.getElementById('tabuada')) {
        document.getElementById('tabuada').remove()
    }

    let numero = document.getElementById('numero').value

    if (numero < 1 || numero > 10){
        alert('Por favor insira um número entre 1 e 10')

        return
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
        document.getElementById('b' + i).innerText = i
        document.getElementById('c' + i).innerText = numero * i
    }
    
    /*
    if(document.getElementById('tabela')){
        document.getElementById('tabela').remove()
    }

    let numero = document.getElementById('numero').value

        if (numero < 1 || numero > 10){
        alert('Por favor insira um número entre 1 e 10')

        return
    }
    
    let tabelaHTML = ''

    tabelaHTML += "<table id='tabela'>"
    tabelaHTML += '<tbody>'

    for (i = 1; i <= 10; i++) {
        tabelaHTML += '<tr>'
        tabelaHTML += '<td>' + numero + '</td>'
        tabelaHTML += '<td>' + i + '</td>'
        tabelaHTML += '<td>' + numero * i + '</td>'
        tabelaHTML += '</tr>'
    }

    tabelaHTML += '</tbody>'
    tabelaHTML += '</table>'

    document.body.innerHTML += tabelaHTML
    */
}


