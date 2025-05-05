function Calcular() {

    //definição das variáveis
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var operacao = document.getElementById('operacao').value

    //verifica se os números inseridos são válidos
    if(!(isNaN(numero1)) && !(isNaN(numero2))){

        //verifica se a operação é multiplicação
        if (operacao == 'mult') {

            //calculo e exibição do resultado 
            resultado = numero1 * numero2
    
            document.getElementById('resultado').innerHTML = "Resultado: " + resultado
    
        //verifica se a operação é soma
        } else if (operacao == 'soma') {
    
            //calculo e exibição do resultado 
            resultado = numero1 + numero2
    
            document.getElementById('resultado').innerHTML = "Resultado: " + resultado
    
        //verifica se a operação é subtração
        } else if (operacao == 'sub') {
    
            //calculo e exibição do resultado 
            resultado = numero1 - numero2
    
            document.getElementById('resultado').innerHTML = "Resultado: " + resultado
    
        //verifica se a operação é divisão
        } else if (operacao == 'div') {
    
            //calculo e exibição do resultado 
            resultado = numero1 / numero2
    
            document.getElementById('resultado').innerHTML = "Resultado: " + resultado
    
        }  else {
    
            //mensagem de operação inválida
            document.getElementById('resultado').innerHTML = "Insira um operação válida!"
        }

    } else {

        //mensagem de números inválidos
        document.getElementById('resultado').innerHTML = "Insira números válidos!"
    }

}