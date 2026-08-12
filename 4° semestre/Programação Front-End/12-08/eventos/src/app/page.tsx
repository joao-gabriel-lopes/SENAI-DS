'use client'
import { BotaoPadrao } from "@/Components/botoes/botaoPadrao";
import { BotaoNavegacao } from "@/Components/botoes/botaoNavegacao";
import { BotaoOperacao } from "@/Components/botoes/botaoOperacao";
import styles from "./globals.css";
import { TabelaPadrao } from "@/Components/tabelas/tabelaPadrao";
import { ListaPadrao } from "@/Components/listas/listaPadrao";

export default function Index() {
  const frutas = [
    { nome: "banana", precoKg: 5.50, calorias: 85 },
    { nome: "abacate", precoKg: 8.50, calorias: 100 },
    { nome: "maçã", precoKg: 4.50, calorias: 90 },
    { nome: "laranja", precoKg: 3.50, calorias: 75 },
    { nome: "tangerina", precoKg: 2.50, calorias: 120 },
    { nome: "pera", precoKg: 5.00, calorias: 110 },
  ]

  const produtosLimpeza = [
    { nome: "detergente", preco: 1.30, marca: "Ypê" },
    { nome: "deseinfetante", preco: 8, marca: "Pinho Sol" },
    { nome: "Água sanitária", preco: 13, marca: "Varek" },
    { nome: "amaciante", preco: 11, marca: "Orca" },

  ]

  return (
    <div className="containerIndex">
      <h1>Lista de componentes</h1>

      <TabelaPadrao
        cabecalhos={["Nome", "Valor Por Kg"]}
        colunas={["nome", "precoKg"]}
        lista={frutas}
      />

      <TabelaPadrao
        cabecalhos={["Nome", "Valor", "Marca"]}
        colunas={["nome", "preco", "marca"]}
        lista={produtosLimpeza}
      />

      <ListaPadrao coluna="nome" lista={frutas} />

      <ListaPadrao coluna="calorias" lista={frutas} />

      <ListaPadrao coluna="nome" lista={produtosLimpeza} />

      <ListaPadrao coluna="marca" lista={produtosLimpeza} />

      <div>
        <BotaoPadrao text="Salvar" />
        <BotaoPadrao text="Excluir" backgroundColor="indianred" borderColor="blue" />
      </div>

      <BotaoNavegacao eventoVoltar={() => alert("Voltar")} eventoAvancar={() => alert("Avançar")} />

      <BotaoOperacao eventoDecrementar={() => alert("Decrementar")} eventoIncrementar={() => alert("Incrementar")} />
    </div>
  );
}
