let dados = []
dados['nome'] = []
dados['altura'] = []

function AdicionarPessoa() {
    let nome = document.getElementById('nome').value
    let altura = parseFloat(document.getElementById('altura').value)

    if (nome == '' || isNaN(altura)){
        document.getElementById('resultado').innerHTML = 'Insira valores váidos nos campos!'
    
        return 
    }

    dados['nome'].push(nome)
    dados['altura'].push(altura)

    document.getElementById('resultado').innerHTML = `${nome} adicionado(a) na lista, com uma altura de ${altura}m`
}

function ListarSituacoes() {
    document.getElementById('resultado').innerHTML = ''

    let permissao = ''
    let pessoas = 0

    let tabela = document.createElement('table')
    tabela.id = 'tabela'

    let tr_th = document.createElement('tr')
    tr_th.id = 'tr_th'

    th1 = document.createElement('th')
    th2 = document.createElement('th')
    th3 = document.createElement('th')

    th1.id = `th1`
    th2.id = `th2`
    th3.id = `th3`

    document.getElementById('resultado').appendChild(tabela)

    document.getElementById('tabela').appendChild(tr_th)

    document.getElementById('tr_th').appendChild(th1)
    document.getElementById('tr_th').appendChild(th2)
    document.getElementById('tr_th').appendChild(th3)

    document.getElementById('th1').innerHTML = 'Nome'
    document.getElementById('th2').innerHTML = 'Altura'
    document.getElementById('th3').innerHTML = 'Situação'

    for (i = 0; i < dados['nome'].length; i++) {
        let tr = document.createElement('tr')
        tr.id = `tr${i}`

        let td1 = document.createElement('td')
        td1.id = `td${i}${pessoas}`

        let td2 = document.createElement('td')
        td2.id = `td${i + 1}${pessoas}`

        let td3 = document.createElement('td')
        td3.id = `td${i + 2}${pessoas}`

        if (dados['altura'][i] <= 1.50) {
            permissao = 'Entrada Não Permitida'
        } else {
            permissao = 'Entrada Permitida'
        }

        document.getElementById('tabela').appendChild(tr)

        document.getElementById(`tr${i}`).appendChild(td1)
        document.getElementById(`tr${i}`).appendChild(td2)
        document.getElementById(`tr${i}`).appendChild(td3)

        document.getElementById(`td${i}${pessoas}`).innerHTML = dados['nome'][i]
        document.getElementById(`td${i + 1}${pessoas}`).innerHTML = dados['altura'][i]
        document.getElementById(`td${i + 2}${pessoas}`).innerHTML = permissao

        pessoas += 1
    }
}


function RecarregarPágina() {
    window.location.reload()

}