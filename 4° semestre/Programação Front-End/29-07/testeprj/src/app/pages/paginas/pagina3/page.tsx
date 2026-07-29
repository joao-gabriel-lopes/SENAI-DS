"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina3() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="rodape">
          <p className="textoLivro">
            — “Morto! morto!” dizia consigo.
            E a imaginação dela, como as cegonhas que um ilustre viajante viu
            desferirem o vôo desde o Ilisso às ribas africanas, sem embargo das
            ruínas e dos tempos, — a imaginação dessa senhora também voou
            por sobre os destroços presentes até às ribas de uma África juvenil...
            Deixá-la ir; lá iremos mais tarde; lá iremos quando eu me restituir
            aos primeiros anos. Agora, quero morrer tranqüilamente,
            metodicamente, ouvindo os soluços das damas, as falas baixas dos
            homens, a chuva que tamborila nas folhas de tinhorão da chácara, e
            o som estrídulo de uma navalha que um amolador está afiando lá
            fora, à porta de um correeiro. Juro-lhes que essa orquestra da morte
            foi muito menos triste do que podia parecer. De certo ponto em
            diante chegou a ser deliciosa. A vida estrebuchava-me no peito, com
            uns ímpetos de vaga marinha, esvaía-se-me a consciência, eu descia
            à imobilidade física e moral, e o corpo fazia-se-me planta, e pedra e
            lodo, e coisa nenhuma.
            Morri de uma pneumonia; mas se lhe disser que foi menos a
            pneumonia, do que uma idéia grandiosa e útil, a causa da minha
            morte, é possível que o leitor me não creia, e todavia é verdade. Vou
            expor-lhe sumariamente o caso. Julgue-o por si mesmo.
          </p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina2") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina4") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
