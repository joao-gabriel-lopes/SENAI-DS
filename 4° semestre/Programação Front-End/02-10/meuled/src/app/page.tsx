"use client"
import { Button, FormControlLabel, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import styles from "./page.module.css"
import { useState } from "react";
import Paper from '@mui/material/Paper';
import IHistorico from "@/interfaces/IHistorico";
import Image from "next/image";
import { AdicionarHistorico, AlternarLed, CarregarHistorico, CarregarUltimoHistorico } from "@/api";

export default function Home() {
  const [historico, setHistorico] = useState<IHistorico[]>([])
  const [estadoLampada, setEstadoLampada] = useState<boolean>(true);
  const [usuario, setUsuario] = useState<string>("")

  async function MudarEstado() {
    await AdicionarHistorico(usuario);
    setEstadoLampada(!estadoLampada);
    setHistorico(await CarregarHistorico(usuario));
    const ultimoHistorico = await CarregarUltimoHistorico(usuario);
    await AlternarLed(ultimoHistorico.estado);
  }

  async function Pesquisar(valor: string) {
    setHistorico(await CarregarHistorico(valor));

    const ultimoHistorico = await CarregarUltimoHistorico(valor);
    setEstadoLampada(ultimoHistorico.estado);
    await AlternarLed(ultimoHistorico.estado);
  }

  function CorrigirData(data: Date | string | null | undefined) {
    const dataValida = data instanceof Date ? data : new Date(String(data ?? ""));

    if (!data || Number.isNaN(dataValida.getTime())) {
      return "Sem horário";
    }

    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: "2-digit",
      hour12: false
    }).format(dataValida).replace(",", "")
  }

  return (
    <section className={styles.container}>

      <div className={styles.formulario}>
        <TextField label="Usuário" variant="outlined" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

        <Button style={{ fontSize: 25, borderColor: "#bdbcbc" }} variant="outlined" onClick={() => Pesquisar(usuario)}>🔎</Button>

        <FormControlLabel
          control={
            <Switch name="estado" checked={estadoLampada} onChange={() => MudarEstado()} />
          }
          label="Ligar/Desligar"
          labelPlacement="top"
        />

        <Image
          src={estadoLampada ? "/images/lampada_acesa.png" : "/images/lampada_apagada.png"}
          width={50}
          height={50}
          alt="Lâmpada"
        />
      </div>

      <div className={styles.tabelaContainer}>
        <h1>Histórico</h1>

        <TableContainer className={styles.tabela} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Usuário</TableCell>
                <TableCell align="center">Horário</TableCell>
                <TableCell align="center">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historico.map((linha) => (
                <TableRow
                  key={linha.id}
                >
                  <TableCell align="center">{linha.usuario}</TableCell>
                  <TableCell align="center">{CorrigirData(linha.hora)}</TableCell>
                  <TableCell align="center">{linha.estado ? "Ligado" : "Desligado"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </section>
  );
}
