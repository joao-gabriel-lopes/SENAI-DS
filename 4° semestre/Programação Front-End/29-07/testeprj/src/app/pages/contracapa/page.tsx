"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../.././globals.css";

export default function Contracapa() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="cabecalho">
          <p className="titulo">Memórias Póstumas de Brás Cubas</p>
        </div>
        <div className="rodape">
          <p className="textoLivro">Não espere um romance comum. O narrador desta história não é um autor que morreu, mas um defunto autor. Do outro lado da vida, livre das amarras e das aparências da hipócrita sociedade carioca do século XIX, Brás Cubas decide contar a sua própria história.</p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/paginas5") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
