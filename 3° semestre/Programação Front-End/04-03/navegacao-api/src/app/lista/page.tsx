"use client"
import "./page.css";
import { useEffect, useState } from "react";
import { ListarCarteiras } from "../carteiraApi";
import ICarteira from "../carteiraInterface";

export default function Lista() {
  const [lista, setLista] = useState<ICarteira[]>([]);

  useEffect(() => {
    carregarCarteiras();
  }, []);

  const carregarCarteiras = async () => {
    try {
      const dados = await ListarCarteiras();
      setLista(dados);
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <div className="container">
      <h1 className="card-titulo">Carteiras</h1>
      {lista.map(carteira => (
        <div key={carteira.id.toString()} className="card">
          <button
            onClick={() => window.location.href=`/cadastro?id=${carteira.id.toString()}`}
            className="card-botao"
          >
            {carteira.nome}
          </button>
        </div>
      ))}
    </div>
  );
}
