"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "./globals.css";
import img_capa from "../images/./bras_cubas.jpg"

export default function Index() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        {/* <div className="cabecalho">
          <p className="titulo">Memórias Póstumas de Brás Cubas</p>
          <p className="subtitulo">As confissões irônicas de um defunto autor</p>
        </div>
        <div className="rodape">
          <p className="textoLivro">Machado de Assis</p>
          <p className="textoLivro">1881</p>
        </div> */}
        <img className="img-capa" src={img_capa.src} alt="" />
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/contracapa/") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/dedicatoria/") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
