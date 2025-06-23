function VerificarCadastro(){
    let nome = document.getElementById('nome-cadastro').value
    let email = document.getElementById('email-cadastro').value
    let senha = document.getElementById('senha-cadastro').value
    let senha_confirmar = document.getElementById('senha-confirmar-cadastro').value

    if (nome == '' || email == '' || senha == ''|| senha_confirmar == ''){
        document.getElementById('mensagem').innerHTML = 'Insira informações válidas nos campos acima!'

    } else {
        if (senha != senha_confirmar){
            document.getElementById('mensagem').innerHTML = 'As senhas inseridas não correspondem!'
        
        } else{
            window.location.href = '../home/index.html'

        }
    }

}