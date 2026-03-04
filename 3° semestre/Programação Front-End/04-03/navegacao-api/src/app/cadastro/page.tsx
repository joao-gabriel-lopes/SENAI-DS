"use client";
import "./page.css";
import { useEffect, useState } from "react";
import ICarteira from "../carteiraInterface";
import { AtualizarCarteira, BuscarCarteiraPorId, InserirCarteira } from "../carteiraApi";
import { useSearchParams } from "next/navigation";

export default function Cadastro() {
  const params = useSearchParams();
  const id = params.get("id");

  const [carteira, setCarteira] = useState<ICarteira>();

  const [rm, setRm] = useState(0);
  const [nome, setNome] = useState("");
  const [unidade, setUnidade] = useState<string>("");
  const [curso, setCurso] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [urlFoto, setUrlFoto] = useState("");

  const carregarCarteira = async () => {
    try {
      if (id) {
        const dados = await BuscarCarteiraPorId(id);
        setCarteira(dados);
        setRm(Number(dados?.rm) ?? 0)
        setNome(String(dados?.nome))
        setUnidade(String(dados?.unidade))
        setCurso(String(dados?.curso))
        setNascimento(dados?.nascimento.toString() ?? "")
        setUrlFoto(String(dados?.urlFoto))
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    carregarCarteira();
  }, []);

  const cartaoAtualizar = () => {
    return (
      <div className={"card"}>
        <h1 className="card-titulo">{id}</h1>
        <input className="card-input" type="number" value={rm} onChange={(e) => { setRm(Number(e.target.value)) }} />
        <input className="card-input" type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />
        <input className="card-input" type="text" value={unidade} onChange={(e) => { setUnidade(e.target.value) }} />
        <input className="card-input" type="text" value={curso} onChange={(e) => { setCurso(e.target.value) }} />
        <input className="card-input" type="date" value={nascimento} onChange={(e) => { setNascimento(e.target.value) }} />
        <input className="card-input" type="text" value={urlFoto} onChange={(e) => { setUrlFoto(e.target.value) }} />
        <button className="card-botao" onClick={() => {
          AtualizarCarteira(String(id), {
            id: String(id), rm, nome, unidade, curso, nascimento: new Date(nascimento), urlFoto
          } as ICarteira);

        }}>Atualizar</button>
      </div>
    );
  }

  const cartaoInserir = () => {
    return (
      <div className={"card"}>
        <input className="card-input" type="number" value={rm} onChange={(e) => { setRm(Number(e.target.value)) }} placeholder="Insira o rm"/>
        <input className="card-input" type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} placeholder="Insira o nome"/>
        <input className="card-input" type="text" value={unidade} onChange={(e) => { setUnidade(e.target.value) }} placeholder="Insira a unidade"/>
        <input className="card-input" type="text" value={curso} onChange={(e) => { setCurso(e.target.value) }} placeholder="Insira o curso"/>
        <input className="card-input" type="date" value={nascimento} onChange={(e) => { setNascimento(e.target.value) }} placeholder="Insira a data de nascimento"/>
        <input className="card-input" type="text" value={urlFoto} onChange={(e) => { setUrlFoto(e.target.value) }} />
        <button className="card-botao" onClick={async () => {
            await InserirCarteira({
              id: "", rm: Number(rm), nome, unidade, curso, nascimento: new Date(nascimento), urlFoto
            } as ICarteira);
        }}>Inserir</button>
      </div>
    );
  }

  if (id) {
    return (
      <>
        {cartaoAtualizar()}
      </>
    );
  } else {
    return (
      <>
        {cartaoInserir()}
      </>
    )
  }
}

