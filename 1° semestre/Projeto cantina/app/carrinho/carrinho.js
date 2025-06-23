function AbrirMenu() {

    if (document.getElementById('menu').style.visibility != 'visible') {
        document.getElementById('menu').style.visibility = 'visible'

    } else {
        document.getElementById('menu').style.visibility = 'hidden'

    }

}

function AdicionarCarrinho(indice_quantidade, sinal_conta, preco_produto) {

    const quantidade_str = 'Quantidade: '

    let quantidade = document.getElementById(`quantidade${indice_quantidade}`).innerHTML
    let preco = document.getElementById(`preco${indice_quantidade}`).innerHTML
    quantidade = quantidade.replace(quantidade_str, '')

    quantidade = parseInt(quantidade)

    if (sinal_conta == '-') {
        if (quantidade != '0') {
            quantidade -= 1

        } else {
            return null

        }

    }

    if (sinal_conta == '+') {
        quantidade += 1
    }

    document.getElementById(`quantidade${indice_quantidade}`).innerHTML = `Quantidade: ${quantidade}`
    document.getElementById(`preco${indice_quantidade}`).innerHTML = `Preço: R$ ${quantidade * preco_produto}`

}

function ConcluirCompra() {

    const quantidade_str = 'Quantidade: '
    const preco_str = 'Preço: R$ '

    let preco_final = 0
    let quantidade_final = 0

    for (i = 1; i <= 4; i++) {

        preco = document.getElementById(`preco${i}`).innerHTML
        preco = preco.replace(preco_str, '')
        preco = parseFloat(preco)

        preco_final += preco

    }

    for (i = 1; i <= 4; i++) {

        quantidade = document.getElementById(`quantidade${i}`).innerHTML
        quantidade = quantidade.replace(quantidade_str, '')
        quantidade = parseFloat(quantidade)

        quantidade_final += quantidade

    }

    if (quantidade_final == 0){
        document.getElementById('mensagem').innerHTML = 'Adicione produtos no carrinho antes de finalizar a compra!'
        
        return
    }

    document.getElementById('mensagem').innerHTML = `Compra finalizada! Você comprou ${quantidade_final} produtos, pelo preço de: R$ ${preco_final}`
}