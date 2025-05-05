function RetornarMultiplos() { 
	document.getElementById("resultado").innerHTML = ''
	let numero = Number(document.getElementById("numero").value);
	let limite = Number(document.getElementById("limite").value);
	let resultado = [];
	let soma = numero; // Começa com o primeiro múltiplo

	while(soma <= limite) {
	    resultado.push(soma); // Adiciona o valor ao resultado
	    soma += numero; // Soma o número base para encontrar o próximo múltiplo

	}
  
	for (let i = 0; i < resultado.length; i++){
		document.getElementById("resultado").innerHTML += resultado[i] + ' '

	}

  
}