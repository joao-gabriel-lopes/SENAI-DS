"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina2() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="rodape">
          <p className="textoLivro">
            — “Vós, que o conhecestes, meus
            senhores, vós podeis dizer comigo que a natureza parece estar
            chorando a perda irreparável de um dos mais belos caracteres que
            têm honrado a humanidade. Este ar sombrio, estas gotas do céu,
            aquelas nuvens escuras que cobrem o azul como um crepe funéreo,
            tudo isso é a dor crua e má que lhe rói à Natureza as mais íntimas
            entranhas; tudo isso é um sublime louvor ao nosso ilustre finado.”

            Bom e fiel amigo! Não, não me arrependo das vinte apólices que lhe
            deixei. E foi assim que cheguei à cláusula dos meus dias; foi assim
            que me encaminhei para o undiscovered country de Hamlet, sem as
            ânsias nem as dúvidas do moço príncipe, mas pausado e trôpego
            como quem se retira tarde do espetáculo. Tarde e aborrecido. Viram-
            me ir umas nove ou dez pessoas, entre elas três senhoras, minha
            irmã Sabina, casada com o Cotrim, a filha, — um lírio do vale, — e...
            Tenham paciência! daqui a pouco lhes direi quem era a terceira
            senhora.

            Contentem-se de saber que essa anônima, ainda que não
            parenta, padeceu mais do que as parentas. É verdade, padeceu mais.
            Não digo que se carpisse, não digo que se deixasse rolar pelo chão,
            convulsa. Nem o meu óbito era coisa altamente dramática... Um
            solteirão que expira aos sessenta e quatro anos, não parece que
            reúna em si todos os elementos de uma tragédia. E dado que sim, o
            que menos convinha a essa anônima era aparentá-lo. De pé, à
            cabeceira da cama, com os olhos estúpidos, a boca entreaberta, a
            triste senhora mal podia crer na minha extinção.
          </p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina1") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina3") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
