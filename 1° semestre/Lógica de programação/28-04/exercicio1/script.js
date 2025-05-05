function SelecionarSalgado(){
    document.getElementById('resposta').innerText = ''
    document.getElementById('imagens').innerHTML = ''
    let matriz_salgados = []
    matriz_salgados['salgados'] = []
    matriz_salgados['imagens'] = []

    if (document.getElementById('coxinha').checked){
        matriz_salgados['salgados'].push('Coxinha')
        matriz_salgados['imagens'].push('<img src="img/coxinha.jpg">')
    }

    if (document.getElementById('esfirra').checked){
        matriz_salgados['salgados'].push('Esfirra')
        matriz_salgados['imagens'].push('<img src="img/esfirra.jpg">')
    }

    if (document.getElementById('quibe').checked){
        matriz_salgados['salgados'].push('Quibe')
        matriz_salgados['imagens'].push('<img src="img/quibe.jpg">')
    }

    if (matriz_salgados['salgados'] == ''){
        document.getElementById('imagens').innerHTML = ''
        document.getElementById('resposta').innerText = ''
        alert('Selecione pelo menos um salgado!')
        
        return

    }

    for (let i = 0; i < matriz_salgados['salgados'].length; i++){
        document.getElementById('resposta').innerText += `${matriz_salgados['salgados'][i]} \n`

    }
    
    for (let i = 0; i < matriz_salgados['imagens'].length; i++){
        document.getElementById('imagens').innerHTML += matriz_salgados['imagens'][i]

    }

}

function LimparTela(){
    window.location.reload()

}