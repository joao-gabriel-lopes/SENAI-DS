lista_nomes = ''

function AdicionarNome() {
    nome = document.getElementById('nome').value
    lista_nomes += nome + '<br>'
    document.getElementById('mensagem').innerHTML = nome + ' foi adicionado(a) na lista'
    document.getElementById('nome').value = ''
}

function LimparLista() {
    lista_nomes = ''
    document.getElementById('lista').innerHTML = ''
    document.getElementById('mensagem').innerHTML = 'A lista foi apagada'
}

function ListarNomes() {
    if (lista_nomes == '') {
        document.getElementById('mensagem').innerHTML = 'A lista está vazia'
    } else {
        document.getElementById('mensagem').innerHTML = 'Os nomes adicionados foram:'
        document.getElementById('lista').innerHTML = lista_nomes
    }
}