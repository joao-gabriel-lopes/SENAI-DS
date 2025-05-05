programa
{
	inclua biblioteca Texto
	inclua biblioteca Matematica
	
	funcao inicio()
	{
		real n1, n2, resultado
	
		escreva("Digite o primeiro número: ")
		leia(n1)

		escreva("Digite o segundo número: ")
		leia(n2)

		resultado = n1 + n2

		escreva("A soma é: " + resultado)

		escreva("\n")

		se(n1 > n2){
			
			escreva("Número 1 é maior")
			
		}senao{
			
			se(n2 > n1){
				
				escreva("Número 2 é maior")
				
			}senao{
				
				escreva("Os números são iguais")
				
			}
		}
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 493; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */