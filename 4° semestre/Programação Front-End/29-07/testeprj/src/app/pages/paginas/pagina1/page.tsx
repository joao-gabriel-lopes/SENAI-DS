"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina1() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="cabecalho">
          <p className="titulo">Capítulo I</p>
          <p className="subtitulo">Óbito do Autor</p>
        </div>
        <div className="rodape">
          <p className="textoLivro">
            Algum tempo hesitei se devia abrir estas memórias pelo princípio ou
            pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a
            minha morte. Suposto o uso vulgar seja começar pelo nascimento,
            duas considerações me levaram a adotar diferente método: a
            primeira é que eu não sou propriamente um autor defunto, mas um
            defunto autor, para quem a campa foi outro berço; a segunda é que
            o escrito ficaria assim mais galante e mais novo. Moisés, que também
            contou a sua morte, não a pôs no intróito, mas no cabo: diferença
            radical entre este livro e o Pentateuco.
            Dito isto, expirei às duas horas da tarde de uma sexta-feira do mês
            de agosto de 1869, na minha bela chácara de Catumbi. Tinha uns
            sessenta e quatro anos, rijos e prósperos, era solteiro, possuía cerca
            de trezentos contos e fui acompanhado ao cemitério por onze
            amigos. Onze amigos! Verdade é que não houve cartas nem
            anúncios. Acresce que chovia — peneirava uma chuvinha miúda,
            triste e constante, tão constante e tão triste, que levou um daqueles
            fiéis da última hora a intercalar esta engenhosa idéia no discurso que
            proferiu à beira de minha cova:
          </p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina2") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
