let indice = 0
let MatrizProdutos = []
MatrizProdutos['indice'] = []
MatrizProdutos['codigo'] = []
MatrizProdutos['descricao'] = []
MatrizProdutos['preco'] = []
MatrizProdutos['quantidade'] = []
MatrizProdutos['subtotal'] = []

function AdicionarProduto(codigo, descricao, preco, qtd) {

    MatrizProdutos['indice'].push(indice)
    MatrizProdutos['codigo'].push(codigo)
    MatrizProdutos['descricao'].push(descricao)
    MatrizProdutos['preco'].push(preco)
    MatrizProdutos['quantidade'].push(qtd)
    MatrizProdutos['subtotal'].push(preco * qtd)

    indice++

    Comprar(
        document.getElementById('banana_input').value,
        document.getElementById('laranja_input').value,
        document.getElementById('maca_input').value,
        document.getElementById('melancia_input').value,
        document.getElementById('input-desconto').value,
        descricao
    )

}


function Comprar(qtd_banana, qtd_laranja, qtd_maca, qtd_melancia, desconto, descricao = '') {

    document.getElementById('resultado').innerHTML = ''

    let produtos = 0
    let valor_total = 0
    let valor_descontado = 0

    let tabela = document.createElement('table')
    tabela.id = 'tabela'

    document.getElementById('resultado').appendChild(tabela)

    let tr_th = document.createElement('tr')
    tr_th.id = 'tr_th'

    document.getElementById('tabela').appendChild(tr_th)

    for (i = 1; i <= 6; i++) {

        let th = document.createElement('th')
        th.id = `th${i}`
        document.getElementById('tr_th').appendChild(th)

    }

    document.getElementById('th1').innerHTML = 'Índice'
    document.getElementById('th2').innerHTML = 'Código'
    document.getElementById('th3').innerHTML = 'Descrição'
    document.getElementById('th4').innerHTML = 'Preço'
    document.getElementById('th5').innerHTML = 'Quantidade'
    document.getElementById('th6').innerHTML = 'Subtotal'

    for (i = 0; i < MatrizProdutos['indice'].length; i++) {

        let tr = document.createElement('tr')
        tr.id = `tr${i}`

        document.getElementById('tabela').appendChild(tr)

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')

        td1.id = `td${MatrizProdutos[i]}${produtos}1`
        td2.id = `td${MatrizProdutos[i]}${produtos}2`
        td3.id = `td${MatrizProdutos[i]}${produtos}3`
        td4.id = `td${MatrizProdutos[i]}${produtos}4`
        td5.id = `td${MatrizProdutos[i]}${produtos}5`
        td6.id = `td${MatrizProdutos[i]}${produtos}6`

        document.getElementById(`tr${i}`).appendChild(td1)
        document.getElementById(`tr${i}`).appendChild(td2)
        document.getElementById(`tr${i}`).appendChild(td3)
        document.getElementById(`tr${i}`).appendChild(td4)
        document.getElementById(`tr${i}`).appendChild(td5)
        document.getElementById(`tr${i}`).appendChild(td6)

        document.getElementById(`td${MatrizProdutos[i]}${produtos}1`).innerHTML = MatrizProdutos['indice'][i]
        document.getElementById(`td${MatrizProdutos[i]}${produtos}2`).innerHTML = MatrizProdutos['codigo'][i]
        document.getElementById(`td${MatrizProdutos[i]}${produtos}3`).innerHTML = MatrizProdutos['descricao'][i]
        document.getElementById(`td${MatrizProdutos[i]}${produtos}4`).innerHTML = 'R$ ' + MatrizProdutos['preco'][i]
        document.getElementById(`td${MatrizProdutos[i]}${produtos}5`).innerHTML = MatrizProdutos['quantidade'][i]
        document.getElementById(`td${MatrizProdutos[i]}${produtos}6`).innerHTML = 'R$ ' + MatrizProdutos['subtotal'][i]

        produtos++

    }

    document.getElementById('resultado').innerHTML += '<hr>'

    for (i = 0; i < MatrizProdutos['subtotal'].length; i++) {
        valor_total += MatrizProdutos['subtotal'][i]

    }

    desconto = valor_total * (desconto / 100)

    valor_descontado = valor_total - desconto

    document.getElementById('resultado').innerHTML += `Valor da total compra: R$ ${valor_total} <br>`
    document.getElementById('resultado').innerHTML += `Valor descontado: R$ ${desconto} <br>`
    document.getElementById('resultado').innerHTML += `Valor final da compra: R$ ${valor_descontado} <br>`

}   