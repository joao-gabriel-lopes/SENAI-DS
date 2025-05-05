function VerificarLogin(){
    let email = document.getElementById('email-login').value
    let senha = document.getElementById('senha-login').value

    if (email == 'jorge@gmail.com' && senha == '1234'){

        window.location.href = '../home/home.html'

    } else{

        document.getElementById('mensagem').innerHTML = 'Insira um email e/ou senha válidos'

    }

    
}