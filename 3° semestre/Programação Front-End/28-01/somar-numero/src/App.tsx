import React, { useState } from 'react';
import './App.css';

function App() {
  /*
  Cria uma variável "numero" e uma função "setNumero"
  useState controla a relação entre o componente da tela e a variável
  atualizando a tela conforme a informação da variável e vice-versa.
  A variável começará com 0
  */

  const [numero, setNumero] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <input 
        type="number" 
        value={numero}
        onChange={(evento) => setNumero(Number(evento.target.value))}
        />
        <button onClick={() => setNumero(numero + 1)}>Acrescentar</button>
    
      <p>{numero}</p>
      </header>
    </div>
  );
}

export default App;
