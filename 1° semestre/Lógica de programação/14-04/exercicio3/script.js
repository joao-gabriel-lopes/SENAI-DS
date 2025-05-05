function SelecionarSalgado(){
    let lista_salgados = ''
    let lista_imagens = ''

    if (document.getElementById('coxinha').checked){
        lista_salgados += 'Coxinha \n'
        lista_imagens += '<img src="img/coxinha.jpg"></img>'
    }

    if (document.getElementById('esfirra').checked){
        lista_salgados += 'Esfirra \n'
        lista_imagens += '<img src="img/esfirra.jpg"></img>'
    }

    if (document.getElementById('quibe').checked){
        lista_salgados += 'Quibe \n'
        lista_imagens += '<img src="img/quibe.jpg"></img>'

    }

    if (lista_salgados == ''){
        document.getElementById('imagens').innerHTML = ''
        document.getElementById('resposta').innerText = ''
        alert('Selecione pelo menos um salgado!')
        
        return

    }

    document.getElementById('resposta').innerText = `Você selecionou: \n ${lista_salgados}`
    document.getElementById('imagens').innerHTML = lista_imagens
}

function LimparTela(){
    window.location.reload()

}