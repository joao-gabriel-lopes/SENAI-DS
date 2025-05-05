programa
{
	
	funcao inicio()
	{
		inteiro N
	
		escreva("Digite um múmero inteiro: ")
		leia(N)

		inteiro contador = 1
		inteiro soma = 0

		enquanto (contador <= N)
		{
			soma = (soma + contador)
			contador = (contador + 1)
		}

		escreva("A soma é: " + soma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 102; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */