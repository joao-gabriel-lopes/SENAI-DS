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
