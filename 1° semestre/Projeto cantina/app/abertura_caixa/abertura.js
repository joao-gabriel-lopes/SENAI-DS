function AbrirMenu() {

    if (document.getElementById('menu').style.visibility != 'visible') {
        document.getElementById('menu').style.visibility = 'visible'

    } else {
        document.getElementById('menu').style.visibility = 'hidden'

    }

}

let numero_itens = 1

function RegistrarMovimentacao() {

    if (document.getElementById('input-data').value == '' || document.getElementById('input-nomefuncionario').value == '' || document.getElementById('input-descricao').value == '' || document.getElementById('input-valor').value == '' || document.getElementById('status-caixa').value == '') {

        alert('Insira valores válidos nos campos!')
        return

    }

    let data = document.getElementById('input-data').value
    let nomefuncionario = document.getElementById('input-nomefuncionario').value
    let descricao = document.getElementById('input-descricao').value
    let valor = parseFloat(document.getElementById('input-valor').value)
    let status = document.getElementById('status-caixa').value
    let observacao = document.getElementById('input-observacao').value

    if (numero_itens > 1) {
        if (document.getElementById(`td${numero_itens - 1}${5}`).innerHTML == status) {
            if (status == 'Abertura') {
                alert(`O caixa já está aberto!`)
                return
            } else {
                alert('O caixa já está fechado!')
                return
            }
        }
    }

    valor = valor.toFixed(2)

    data = data.replace("T", ' ')

    data_dia = data.substring(8, 10)
    data_ano = data.substring(0, 4)

    data = data.replace(data_dia, data_ano)
    data = data.replace(data_ano, data_dia)

    let tabela = document.createElement('table')
    let tr_th = document.createElement('tr')
    let tr = document.createElement('tr')

    tabela.id = 'tabela-movimentacao'
    tr.id = `tr${numero_itens}`
    tr_th.id = 'tr-th'

    if (!(document.getElementById('tabela-movimentacao'))) {
        document.getElementById('tabela-container').appendChild(tabela)
    }

    if (!(document.getElementById('tr-th'))) {

        document.getElementById('tabela-movimentacao').appendChild(tr_th)

        for (i = 1; i <= 6; i++) {
            th = document.createElement('th')
            th.id = `th${i}`
            document.getElementById('tr-th').appendChild(th)

            switch (i) {
                case 1:
                    document.getElementById(`th${i}`).innerHTML = 'Data'
                    break
                case 2:
                    document.getElementById(`th${i}`).innerHTML = 'Nome do Funcionário'
                    break
                case 3:
                    document.getElementById(`th${i}`).innerHTML = 'Descricão'
                    break
                case 4:
                    document.getElementById(`th${i}`).innerHTML = 'Valor'
                    break
                case 5:
                    document.getElementById(`th${i}`).innerHTML = 'Status'
                    break
                case 6:
                    document.getElementById(`th${i}`).innerHTML = 'Observacão'
                    break
            }

        }
    }

    document.getElementById('tabela-movimentacao').appendChild(tr)

    for (i = 1; i <= 6; i++) {
        td = document.createElement('td')
        td.id = `td${numero_itens}${i}`
        document.getElementById(`tr${numero_itens}`).appendChild(td)

        switch (i) {
            case 1:
                document.getElementById(`td${numero_itens}${i}`).innerHTML = data
                break
            case 2:
                document.getElementById(`td${numero_itens}${i}`).innerHTML = nomefuncionario
                break
            case 3:
                document.getElementById(`td${numero_itens}${i}`).innerHTML = descricao
                break
            case 4:
                document.getElementById(`td${numero_itens}${i}`).innerHTML = valor
                break
            case 5:
                document.getElementById(`td${numero_itens}${i}`).innerHTML = status
                break
            case 6:
                document.getElementById(`td${numero_itens}${i}`).innerHTML = observacao
                break

        }
    }

    numero_itens += 1

}