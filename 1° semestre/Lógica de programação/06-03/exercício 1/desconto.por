programa
{
	
	funcao inicio()
	{

		real valorCompra

		escreva("Digite o valor da compra: ")
		leia(valorCompra)

		se(valorCompra > 100){
			valorCompra = valorCompra * 0.9
		}

		escreva("O valor final da compra é: " + valorCompra)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 226; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */