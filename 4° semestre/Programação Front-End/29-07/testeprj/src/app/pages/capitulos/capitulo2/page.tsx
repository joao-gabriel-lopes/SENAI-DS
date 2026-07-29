"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina2() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">

        <div className="cabecalho">
          <p className="titulo">Capítulo II</p>
          <p className="subtitulo">O Emplasto</p>
        </div>

        <div className="rodape">
          <p className="textoLivro">
            Com efeito, um dia de manhã, estando a passear na chácara,
            pendurou-se-me uma idéia no trapézio que eu tinha no cérebro. Uma
            vez pendurada, entrou a bracejar, a pernear, a fazer as mais
            arrojadas cabriolas de volatim, que é possível crer. Eu deixei-me
            estar a contemplá-la. Súbito, deu um grande salto, estendeu os
            braços e as pernas, até tomar a forma de um X: decifra-me ou
            devoro-te.
            Essa idéia era nada menos que a invenção de um medicamento
            sublime, um emplastro anti-hipocondríaco, destinado a aliviar a nossa
            melancólica humanidade. Na petição de privilégio que então redigi,
            chamei a atenção do governo para esse resultado, verdadeiramente
            cristão. Todavia, não neguei aos amigos as vantagens pecuniárias
            que deviam resultar da distribuição de um produto de tamanhos e tão
            profundos efeitos. Agora, porém, que estou cá do outro lado da vida,
            posso confessar tudo: o que me influiu principalmente foi o gosto de
            ver impressas nos jornais, mostradores, folhetos, esquinas, e enfim
            nas caixinhas do remédio, estas três palavras: Emplasto Brás Cubas.
            Para que negá-lo? Eu tinha a paixão do arruído, do cartaz, do foguete
            de lágrimas. Talvez os modestos me argúam esse defeito; fio, porém,
            que esse talento me hão de reconhecer os hábeis. Assim, a minha
            idéia trazia duas faces, como as medalhas, uma virada para o
            público, outra para mim. De um lado, filantropia e lucro; de outro
            lado, sede de nomeada. Digamos: — amor da glória.
            Um tio meu, cônego de prebenda inteira, costumava dizer que o
            amor da glória temporal era a perdição das almas, que só devem
            cobiçar a glória eterna. Ao que retorquia outro tio, oficial de um dos
            antigos terços de infantaria, que o amor da glória era a coisa mais
            verdadeiramente humana que há no homem, e, conseguintemente, a
            sua mais genuína feição.
            Decida o leitor entre o militar e o cônego; eu volto ao emplasto.
          </p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/capitulos/capitulo1") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/capitulos/capitulo3") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
