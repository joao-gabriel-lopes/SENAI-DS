import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BotaoTexto } from "../components/ui/botoes"
import { InputTexto } from "@/components/ui/inputs";
import styles from "./style";

export default function Index() {
  return (
    <SafeAreaProvider>

      <View style={styles.container}>

        <BotaoTexto corBotao="blue" texto="abcdefghijklmnopqrstuvwxyz" corTexto="white" borderRadius={40}/>

        <BotaoTexto corBotao="red" texto="teste" corTexto="yellow" tamanhoTexto={20} larguraBorda={5} paddingVertical={15} />

        <BotaoTexto corBotao="#ee5700" texto="abóbora" larguraBorda={3} corBorda="#5ae619" paddingHorizontal={50} />

        <InputTexto corFundo="#007399" texto="teste" corBordaInferior="#ad0000" larguraBordaInferior={3} corTexto="#b9bc00"/>

        <InputTexto corFundo="#870099" texto="algo interessante" corBordaInferior="#34ad00" larguraBordaInferior={3} corTexto="#bc0000"/>

        <InputTexto texto="exemplo"/>
        
        <InputTexto />

      </View>

    </SafeAreaProvider>
  );
}