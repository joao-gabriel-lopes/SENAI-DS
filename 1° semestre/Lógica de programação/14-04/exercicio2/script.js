function VerificarRadio(){

    if(document.getElementById('homo').checked){
        document.getElementById('respostaRadio').innerText = 'Olá!'

    } else if(document.getElementById('canis').checked){
        document.getElementById('respostaRadio').innerText = 'Au Au!'

    } else if(document.getElementById('felis').checked){
        document.getElementById('respostaRadio').innerText = 'Miau!'

    } else if(document.getElementById('sus').checked){
        document.getElementById('respostaRadio').innerText = 'Roinc!'

    }  else {
        alert('Selecione um gênero!')

        return

    }

}

function LimparTela(){
    window.location.reload()

}