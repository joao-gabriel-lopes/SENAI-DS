programa
{
	
	funcao inicio(){
		cadeia resultado
		inteiro opcao = 5
		real result = 0

		enquanto(opcao != 0){
			escreva("Escolha uma das opções \n")
			escreva("0 - Sair \n")
			escreva("1 - Soma \n")
			escreva("2 - Subtração \n")
			escreva("3 - Multiplicação \n")
			escreva("4 - Divisão \n")

			leia(opcao)

			se(opcao > 4 ou opcao < 0){
				escreva("Insira uma opção válida! \n\n")

				inicio()
			} senao se(opcao == 0){
				escreva("Programa encerrado")
				
			} senao se(opcao == 1){
				result = PegarNumeros("+")

				resultado = "O resultado da soma é: " + result + "\n\n"
				escreva(resultado)
				
			} senao se(opcao == 2){
				result = PegarNumeros("-")

				resultado = "O resultado da subtração é: " + result + "\n\n"
				escreva(resultado)
				
			} senao se(opcao == 3){
				result = PegarNumeros("*")

				resultado = "O resultado da multiplicação é: " + result + "\n\n"
				escreva(resultado)
				
			} senao se(opcao == 4){
				result = PegarNumeros("/")

				resultado = "O resultado da divisão é: " + result + "\n\n"
				escreva(resultado)
				
			}
		}
	
	}
	
	funcao real PegarNumeros(cadeia operador){
		real num1, num2, result = 0
		
		escreva("Digite o primeiro número: ")
		leia(num1)

		escreva("Digite o segundo número: ")
		leia(num2)

		se (operador == "+"){
			result = num1 + num2
			
		} senao se(operador == "-"){
			result = num1 - num2
			
		} senao se(operador == "*"){
			result = num1 * num2
			
		} senao se(operador == "/"){
			result = num1 / num2
			
		}

		retorne result
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1330; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */