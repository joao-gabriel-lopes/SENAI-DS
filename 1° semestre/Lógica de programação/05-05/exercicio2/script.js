lista_nomes = []

function AdicionarNome() {
    nome = document.getElementById('nome').value
    lista_nomes.push(nome)
    document.getElementById('mensagem').innerHTML = nome + ' foi adicionado(a) na lista'
    document.getElementById('nome').value = ''

}

function LimparLista() {
    lista_nomes = []
    document.getElementById('lista').innerHTML = ''
    document.getElementById('mensagem').innerHTML = 'A lista foi apagada'

}

function ListarNomes() {
    if (lista_nomes.length == 0) {
        document.getElementById('mensagem').innerHTML = 'A lista está vazia'

    } else {
        document.getElementById('lista').innerHTML = ''
        document.getElementById('mensagem').innerHTML = 'Os nomes adicionados foram:'

        for (let i = 0; i < lista_nomes.length; i++) {
            document.getElementById('lista').innerHTML += lista_nomes[i] + '<br>'
        }

    }
}