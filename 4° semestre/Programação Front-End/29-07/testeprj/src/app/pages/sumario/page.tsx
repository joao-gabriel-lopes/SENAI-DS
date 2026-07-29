"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../.././globals.css";

export default function Sumario() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="cabecalho">
          <p className="titulo">Sumário</p>
        </div>
        <div className="rodape">
          <p className="textoSumario" onClick={() => router.push("/")}>
            Capa ------------------------------------------------------------------------------ 1
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/dedicatoria/")}>
            Dedicatória ---------------------------------------------------------------------- 2
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/sumario/")}>
            Sumário -------------------------------------------------------------------------- 3
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/paginas/pagina1")}>
            Página 1 -------------------------------------------------------------------------- 4
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/paginas/pagina2")}>
            Página 2 -------------------------------------------------------------------------- 5
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/paginas/pagina3")}>
            Página 3 -------------------------------------------------------------------------- 6
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/paginas/pagina4")}>
            Página 4 -------------------------------------------------------------------------- 7
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/paginas/pagina5")}>
            Página 5 -------------------------------------------------------------------------- 8
          </p>

          <p className="textoSumario" onClick={() => router.push("/pages/contracapa")}>
            Contracapa ----------------------------------------------------------------------- 9
          </p>

        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/dedicatoria/") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina1") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
