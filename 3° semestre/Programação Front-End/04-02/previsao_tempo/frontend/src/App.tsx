import { useState, useEffect } from 'react';
import './App.css';

interface IPrevisao {
  date: Date,
  temperatureC: Number,
  temperatureF: Number,
  summary: String
}

function App() {
  const [lista, setLista] = useState<IPrevisao[]>([]);

  async function CarregarDados() {
    const resposta = await fetch('https://ECFP662N1265443:7215/weatherforecast/');
    const dados = await resposta.json();
    setLista(dados);
  }

  useEffect(() => { CarregarDados() }, []);

  return (
    <div>
      {lista.map((item) => (
        <div>
          <h1>{item.date.toString()}</h1>
          <h3>{item.temperatureC.toFixed()}</h3>
          <h3>{item.temperatureF.toFixed()}</h3>
          <h3>{item.summary}</h3>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;
