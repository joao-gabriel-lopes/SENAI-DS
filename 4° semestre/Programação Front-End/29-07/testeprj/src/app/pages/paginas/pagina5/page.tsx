"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina5() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
      <div className="containerLivro">
        <div className="rodape">
          <p className="textoLivro">
            Assim, a minha
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

        <div className="cabecalho">
          <p className="titulo">Capítulo III</p>
          <p className="subtitulo">Genealogia</p>
        </div>

        <div className="rodape">
          <p className="textoLivro">
            Mas, já que falei nos meus dois tios, deixem-me fazer aqui um curto
            esboço genealógico.
            O fundador da minha família foi um certo Damião Cubas, que
            floresceu na primeira metade do século XVIII. Era tanoeiro de ofício,
            natural do Rio de Janeiro, onde teria morrido na penúria e na
            obscuridade, se somente exercesse a tanoaria. Mas não; fez-se
            lavrador, plantou, colheu, permutou o seu produto por boas e
            honradas patacas, até que morreu, deixando grosso cabedal a um
            filho, licenciado Luís Cubas.
          </p>
        </div>
      </div>
      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/paginas/pagina4") }}>
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
