var usuario_certo = 'aluno'
var senha_certa = '1234'
var tentativas = 0

function ValidarLogin() {
    usuario = document.getElementById('usuario').value
    senha = document.getElementById('senha').value

    if (tentativas < 3) {
        if (usuario == usuario_certo && senha == senha_certa) {
            document.getElementById('mensagem').innerHTML = 'Autenticado'
        } else {
            document.getElementById('mensagem').innerHTML = 'Usuários ou senha inválido(s)'

            tentativas += 1
            document.getElementById('tentativa').innerHTML = 'Tentativas realizadas: ' + tentativas + '/3'
        }

    } else {
        document.getElementById('mensagem').innerHTML = 'Número de tentativas excedido'
    }

}