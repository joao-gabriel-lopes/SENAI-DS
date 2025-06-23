function VerificarLogin(email, senha){
    if (email == 'aluno' && senha == '1234'){

        window.location.href = '../home/home.html'

    } else{

        document.getElementById('mensagem').innerHTML = 'Email e/ou senha inválidos'

    }

    
}