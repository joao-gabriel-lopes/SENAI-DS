import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BotaoTexto } from "../components/ui/botoes"
import { InputTexto } from "@/components/ui/inputs";
import styles from "./style";
import { CardFoto } from "@/components/ui/cards";

export default function Index() {
  return (
    <SafeAreaProvider>

      <ScrollView contentContainerStyle={styles.container}>

        <BotaoTexto corBotao="blue" texto="abcdefghijklmnopqrstuvwxyz" corTexto="white" borderRadius={40} />

        <BotaoTexto corBotao="red" texto="teste" corTexto="yellow" tamanhoTexto={20} larguraBorda={5} paddingVertical={15} />

        <BotaoTexto corBotao="#ee5700" texto="abóbora" larguraBorda={3} corBorda="#5ae619" paddingHorizontal={50} />

        <InputTexto corFundo="#007399" texto="teste" corBordaInferior="#ad0000" larguraBordaInferior={3} corTexto="#b9bc00" />

        <InputTexto corFundo="#870099" texto="algo interessante" corBordaInferior="#34ad00" larguraBordaInferior={3} corTexto="#bc0000" />

        <InputTexto texto="exemplo" />

        <InputTexto />

        <CardFoto
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--FMeiME9rUMkxhNMau3TZ6FQ7jZS5c9QAcZTp4pQQQ&s=10"
          textoPrincipal="Nome: Wolf"
        />

        <CardFoto
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_eQ1myj9az2o0vCgi6FlXNcR27K6nLiv3GMcZA5Vdym5Jjh_I5rbW7w&s=10"
          textoPrincipal="Nome: Douglas"
          textoSecundario="Profissão: CEO da Microsoft"
          textoTerciario="Descrição: A definição de dinheiro"
        />

        <CardFoto
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniqzsuz77sB0atJHWBdN3luTC_bNlFcK9n-uHdE3z3Q&s=10"
          textoPrincipal="Nome: Piccolo"
          textoSecundario="Profissão: Guerreiro"
          textoTerciario="Descrição: Alienígena Namekuseijin"
          borderRadius={50}
          corFundo="#00b36e"
          larguraCard={380}
          alturaCard={450}
          larguraImagem={300}
          alturaImagem={300}
          corTexto="#ffffff"
        />

      </ScrollView>

    </SafeAreaProvider>
  );
}