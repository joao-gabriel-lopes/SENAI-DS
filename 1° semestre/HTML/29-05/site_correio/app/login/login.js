function Login() {
    let email = document.getElementById("email-login").value;
    let senha = document.getElementById("senha-login").value;

    if (email != '' && senha != '') {

        if (email == 'cleiton@gmail.com' && senha == '123456') {
            window.location.href = '../pagina_principal/index.html'

        } else {
            document.getElementById('mensagem').innerHTML = 'Email e/ou senha inválidos!'

        }

    } else {
        document.getElementById('mensagem').innerHTML = 'Insira dados válidos nos campos acima!'

    }
}