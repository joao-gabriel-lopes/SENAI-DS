"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../.././globals.css";

export default function Dedicatoria() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="cabecalho">
          <p className="titulo">Dedicatória</p>
        </div>
        <div className="rodape">
          <p className="subtitulo">Ao Dr. Henrique Maximiano Coelho Netto e a Rodolfo Bernardes, offereço este romance como testemunho de antiga e affetuosa amizade.</p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
