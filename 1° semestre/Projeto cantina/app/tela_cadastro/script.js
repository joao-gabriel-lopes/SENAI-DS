function AbrirMenu() {

    if (document.getElementById('menu').style.visibility != 'visible') {
        document.getElementById('menu').style.visibility = 'visible'

    } else {
        document.getElementById('menu').style.visibility = 'hidden'

    }

}

function CalcularLucro() {
    let preco_custo = document.getElementById('preco-custo').value
    let preco_venda = document.getElementById('preco-venda').value

    if (preco_custo != '' && preco_venda != '' && !(isNaN(preco_custo)) && !(isNaN(preco_venda))) {

        if (preco_custo == preco_venda) {
            document.getElementById('lucro').value = `0%`
            return
        }

        if (preco_venda > preco_custo) {
            lucro = (preco_venda / preco_custo) - 1
            lucro *= 100

            document.getElementById('lucro').value = `${lucro}%`
        } else {
            lucro = (preco_custo / preco_venda) - 1
            lucro *= 100

            document.getElementById('lucro').value = `-${lucro}%`

        }

    } else {
        document.getElementById('lucro').value = ``

    }

}

function CadastrarProduto() {
    window.location.reload()

}