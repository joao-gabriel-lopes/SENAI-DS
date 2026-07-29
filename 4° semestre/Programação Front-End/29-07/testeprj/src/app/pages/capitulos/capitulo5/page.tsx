"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina5() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">

        <div className="cabecalho">
          <p className="titulo">Capítulo V</p>
          <p className="subtitulo">Em Que Aparece A Orelha de Uma Senhora</p>
        </div>

        <div className="rodape">
          <p className="textoLivro">
            Senão quando, estando eu ocupado em preparar e apurar a minha
            invenção, recebi em cheio um golpe de ar; adoeci logo, e não me
            tratei. Tinha o emplasto no cérebro; trazia comigo a idéia fixa dos
            doidos e dos fortes. Via-me, ao longe, ascender do chão das turbas, e
            remontar ao Céu, como uma águia imortal, e não é diante de tão
            excelso espetáculo que um homem pode sentir a dor que o punge. No
            outro dia estava pior; tratei-me enfim, mas incompletamente, sem
            método, nem cuidado, nem persistência; tal foi a origem do mal que
            me trouxe à eternidade. Sabem já que morri numa sexta-feira, dia
            aziago, e creio haver provado que foi a minha invenção que me
            matou. Há demonstrações menos lúcidas e não menos triunfantes.
            Não era impossível, entretanto, que eu chegasse a galgar o cimo de
            um século, e a figurar nas folhas públicas, entre macróbios. Tinha
            saúde e robustez. Suponha-se que, em vez de estar lançando os
            alicerces de uma invenção farmacêutica, tratava de coligir os
            elementos de uma instituição política, ou de uma reforma religiosa.
            Vinha a corrente de ar, que vence em eficácia o cálculo humano, e lá
            se ia tudo. Assim corre a sorte dos homens.
            Com esta reflexão me despedi eu da mulher, não direi mais discreta,
            mas com certeza mais formosa entre as contemporâneas suas, a
            anônima do primeiro capítulo, a tal, cuja imaginação à semelhança
            das cegonhas do Ilisso... Tinha então 54 anos, era uma ruína, uma
            imponente ruína. Imagine o leitor que nos amamos, ela e eu, muitos
            anos antes, e que um dia, já enfermo, vejo-a assomar à porta da
            alcova...
          </p>
        </div>
      </div>
      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/capitulos/capitulo4") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/contracapa") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
