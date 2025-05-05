function verificaSenha(){
    senha = document.getElementById('senha').value
    if(senha != 1234){
        document.getElementById('resultado').innerHTML = 'Senha incorreta'
    } else{
        document.getElementById('resultado').innerHTML = 'Acesso permitido'
    }

}
