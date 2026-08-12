'use client'
import { BotaoPadrao } from "@/Components/botoes/botaoPadrao";
import { BotaoNavegacao } from "@/Components/botoes/botaoNavegacao";
import styles from "./globals.css";
import { BotaoOperacao } from "@/Components/botoes/botaoOperacao";

export default function Index() {
  return (
    <div className="containerIndex">
      <h1>Lista de componentes</h1>

      <div>
        <BotaoPadrao text="Salvar" />
        <BotaoPadrao text="Excluir" backgroundColor="indianred" borderColor="blue" />
      </div>

      <BotaoNavegacao eventoVoltar={() => alert("Voltar")} eventoAvancar={() => alert("Avançar")} />
      
      <BotaoOperacao eventoDecrementar={() => alert("Decrementar")} eventoIncrementar={() => alert("Incrementar")}/>
    </div>
  );
}
