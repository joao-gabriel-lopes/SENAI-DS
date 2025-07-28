function VerificarLogin(){
    let email = document.getElementById('nome-login').value
    let senha = document.getElementById('senha-login').value

    if (email == 'aluno' && senha == '1234'){

        document.getElementById('mensagem').innerHTML = "Login efetuado com sucesso"
        document.getElementById('mensagem').className = "sucesso"

    } else{

        document.getElementById('mensagem').innerHTML = 'Insira um nome e/ou senha válidos'
        document.getElementById('mensagem').className = "erro"
    }

    
}