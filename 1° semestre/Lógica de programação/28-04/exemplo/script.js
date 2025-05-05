let vetor = [];
let comandosExecutadosHTML = [];
const mensagem = document.getElementById("mensagem");

function recriarTabela() {
  const tabela = document.getElementById("tabela-vetor");
  tabela.innerText = "";

  const thead = document.createElement("thead");
  tabela.appendChild(thead);

  const theadTr = document.createElement("tr");
  thead.appendChild(theadTr);

  const trTh1 = document.createElement("th");
  trTh1.innerText = "Índice";

  const trTh2 = document.createElement("th");
  trTh2.innerText = "Valor";

  theadTr.appendChild(trTh1);
  theadTr.appendChild(trTh2);

  const tbody = document.createElement("tbody");

  for (let i = 0; i < vetor.length; i++) {
    const linha = document.createElement("tr");

    const colunaIndice = document.createElement("td");
    colunaIndice.innerText = i;

    const colunaValor = document.createElement("td");
    colunaValor.innerText = vetor[i];

    linha.appendChild(colunaIndice);
    linha.appendChild(colunaValor);
    tbody.appendChild(linha);
  }

  tabela.appendChild(tbody);
}

function adicionarElemento() {
  const input = document.getElementById("elemento");
  const valor = input.value.trim();
  let resultadoHTML = "";

  if (valor !== "") {
    vetor.push(valor);
    input.value = "";
    let comando = `vetor.push("${valor}");`;

    comandosExecutadosHTML.push(
      `Adicionar Elemento:<br><pre class="destaqueCodigo">${comando}</pre>`
    );

    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVerde">
      Resultado: 
      <br> - Comando executado com sucesso.
      </span>`;
  } else {
    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVermelho">
      Resultado: 
      <br> - Nenhum comando foi executado;
      <br> - Motivo: Para INSERIR um elemento, é necessário informar um VALOR VÁLIDO.
      </span>`;
  }

  atualizarMensagem(resultadoHTML);
}

function removerElemento() {
  const inputIndice = document.getElementById("indiceRemover");
  const indice = parseInt(inputIndice.value);
  let resultadoHTML = "";

  if (!isNaN(indice) && indice >= 0 && indice < vetor.length) {
    const removido = vetor.splice(indice, 1);
    inputIndice.value = "";

    let comando = `vetor.splice(${indice}, 1);`;

    comandosExecutadosHTML.push(
      `Remover Elemento:<br><pre class="destaqueCodigo">${comando}</pre>`
    );

    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVerde">
      Resultado: 
      <br> - Comando executado com sucesso.
      </span>`;
  } else {
    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVermelho">
      Resultado: 
      <br> - Nenhum comando foi executado;
      <br> - Motivo: Para REMOVER um elemento, é necessário informar um ÍNDICE VÁLIDO.
      </span>`;
  }

  atualizarMensagem(resultadoHTML);
}

function lerElemento() {
  const inputIndice = document.getElementById("indiceLer");
  const indice = parseInt(inputIndice.value);
  let resultadoHTML = "";

  if (!isNaN(indice) && indice >= 0 && indice < vetor.length) {
    let comando = `vetor[${indice}]`;

    comandosExecutadosHTML.push(
      `Ler Elemento:<br><pre class="destaqueCodigo">${comando}</pre>`
    );

    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVerde">
      Resultado: 
      <br> - Comando executado com sucesso.
      </span>`;

    alert(`O valor do índice ${indice} é ${vetor[indice]}`);
  } else {
    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVermelho">
      Resultado: 
      <br> - Nenhum comando foi executado;
      <br> - Motivo: Para LER um elemento, é necessário informar um ÍNDICE VÁLIDO.
      </span>`;
  }

  atualizarMensagem(resultadoHTML);
}

function lerTodosElementos() {
  let resultadoHTML = "";
  let alertTexto = "Valores do vetor:\n";
  let blocoFor = "for (let i = 0; i < vetor.length; i++) {\n";

  if (vetor.length > 0) {
    for (let i = 0; i < vetor.length; i++) {
      blocoFor += `    vetor[i]; // iteração do "for", com "i" valendo ${i}\n`;
      alertTexto += `vetor[${i}] = ${vetor[i]}\n`;
    }
    blocoFor += "}";

    comandosExecutadosHTML.push(
      `Ler todos os elementos com estrutura de repetição:<br><pre class="destaqueCodigo">${blocoFor}</pre>`
    );

    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVerde">
      Resultado:
      <br> - Comando executado com sucesso: todos os elementos foram lidos.
      </span>`;

    alert(alertTexto);
  } else {
    resultadoHTML =
      `
      <br><br>
      <span class="destaqueVermelho">
      Resultado:
      <br> - Nenhum comando foi executado;
      <br> - Motivo: O vetor está vazio.
      </span>`;
  }

  atualizarMensagem(resultadoHTML);
}

function limparVetor() {
  vetor = [];
  let resultadoHTML = "";

  let comando = `vetor = [];`;

  comandosExecutadosHTML.push(
    `Limpar Vetor:<br><pre class="destaqueCodigo">${comando}</pre>`
  );

  resultadoHTML =
    `
    <br><br>
    <span class="destaqueVerde">
    Resultado: 
    <br> - Comando executado com sucesso.
    </span>`;

  atualizarMensagem(resultadoHTML);
}

function atualizarMensagem(resultadoHTML) {
  mensagem.innerHTML = "";
  for (let i = 0; i < comandosExecutadosHTML.length; i++) {
    mensagem.innerHTML += "<br>" + comandosExecutadosHTML[i];
  }
  mensagem.innerHTML += resultadoHTML;
}
