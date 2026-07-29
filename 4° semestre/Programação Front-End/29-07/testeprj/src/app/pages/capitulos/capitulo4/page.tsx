"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../.././globals.css";

export default function Pagina4() {
  const router = useRouter();

  return (
    <div className="containerConteudo">
     <div className="containerLivro">

        <div className="cabecalho">
          <p className="titulo">Capítulo IV</p>
          <p className="subtitulo">A Ideia Fixa</p>
        </div>

        <div className="rodape">
          <p className="textoLivro">
            A minha idéia, depois de tantas cabriolas, constituíra-se idéia fixa.
            Deus te livre, leitor, de uma idéia fixa; antes um argueiro, antes uma
            trave no olho. Vê o Cavour; foi a idéia fixa da unidade italiana que o
            matou. Verdade é que Bismarck não morreu; mas cumpre advertir
            que a natureza é uma grande caprichosa e a história uma eterna
            loureira. Por exemplo, Suetônio deu-nos um Cláudio, que era um
            simplório, — ou “uma abóbora” como lhe chamou Sêneca, e um Tito,
            que mereceu ser as delícias de Roma. Veio modernamente um
            professor e achou meio de demonstrar que dos dois césares, o
            delicioso, o verdadeiro delicioso, foi o “abóbora” de Sêneca. E tu,
            madama Lucrécia, flor dos Bórgias, se um poeta te pintou como a
            Messalina católica, apareceu um Gregorovius incrédulo que te apagou
            muito essa qualidade, e, se não vieste a lírio, também não ficaste
            pântano. Eu deixo-me estar entre o poeta e o sábio.
            Viva pois a história, a volúvel história que dá para tudo; e, tornando
            à idéia fixa, direi que é ela a que faz os varões fortes e os doidos; a
            idéia móbil, vaga ou furta-cor é a que faz os Cláudios, — fórmula
            Suetônio.
            Era fixa a minha idéia, fixa como... Não me ocorre nada que seja
            assaz fixo nesse mundo: talvez a lua, talvez as pirâmides do Egito,
            talvez a finada dieta germânica. Veja o leitor a comparação que
            melhor lhe quadrar, veja-a e não esteja daí a torcer-me o nariz, só
            porque ainda não chegamos à parte narrativa destas memórias. Lá
            iremos. Creio que prefere a anedota à reflexão, como os outros
            leitores, seus confrades, e acho que faz muito bem. Pois lá iremos.
            Todavia, importa dizer que este livro é escrito com pachorra, com a
            pachorra de um homem já desafrontado da brevidade do século, obra
            supinamente filosófica, de uma filosofia desigual, agora austera, logo
            brincalhona, coisa que não edifica nem destrói, não inflama nem
            regala, e é todavia mais do que passatempo e menos do que
            apostolado.
            Vamos lá; retifique o seu nariz, e tornemos ao emplasto. Deixemos a
            história com os seus caprichos de dama elegante. Nenhum de nós
            pelejou a batalha de Salamina, nenhum escreveu a confissão de
            Augsburgo; pela minha parte, se alguma vez me lembro de
            Cromwell, é só pela idéia de que Sua Alteza, com a mesma mão que
            trancara o parlamento, teria imposto aos ingleses o emplasto Brás
            Cubas. Não se riam dessa vitória comum da farmácia e do
            puritanismo. Quem não sabe que ao pé de cada bandeira grande,
            pública, ostensiva, há muitas vezes várias outras bandeiras
            modestamente particulares, que se hasteiam e flutuam à sombra
            daquela, e não poucas vezes lhe sobrevivem? Mal comparando, é
            como a arraia-miúda, que se acolhia à sombra do castelo feudal; caiu
            este e a arraia ficou. Verdade é que se fez graúda e castelã... Não, a
            comparação não presta.
          </p>
        </div>
      </div>

      <div className="containerButton">
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/sumario/") }}>
          <p className="seta">
            Voltar ao Sumário
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/capitulos/capitulo3") }}>
          <p className="seta">
            ◀
          </p>
        </Button>
        <Button className="button" variant="contained" onClick={() => { router.push("/pages/capitulos/capitulo5") }}>
          <p className="seta">
            ▶
          </p>
        </Button>
      </div>
    </div>
  );
}
