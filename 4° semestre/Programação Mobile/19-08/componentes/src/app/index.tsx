import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CardFoto } from "@/components/ui/Cards";
import styles from "./style";
import { CardAntesDepois } from "@/components/ui/CardAntesDepois";

export default function Index() {
  return (
    <SafeAreaProvider>

      <ScrollView contentContainerStyle={styles.container}>

        <CardFoto
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--FMeiME9rUMkxhNMau3TZ6FQ7jZS5c9QAcZTp4pQQQ&s=10"
          textoPrincipal="Nome: Wolf"
          estiloImagem="redonda"
        />

        <CardFoto
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_eQ1myj9az2o0vCgi6FlXNcR27K6nLiv3GMcZA5Vdym5Jjh_I5rbW7w&s=10"
          textoPrincipal="Nome: Douglas"
          textoSecundario="Profissão: CEO da Microsoft"
          textoTerciario="Descrição: A definição de dinheiro"
          estiloImagem="quadrada"
        />

        <CardFoto
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
          larguraCard={700}
          alturaCard={400}
          larguraImagem={300}
          alturaImagem={300}
          estiloImagem="redonda"
          corTexto="#ffffff"
        />

        <CardAntesDepois
          titulo="Serjão Foguetes"
          imgAntes="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8HlLvko_qp02khgSD8SAAA-g-Qjx5J9PXDBvdofc2Q&s=10"
          imgDepois="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaMyz3vjtBR4S64OOhuES7zafdKKh7O7LApJsfcAEAA&s=10"
        />

        <CardAntesDepois
          titulo="Xandão"
          imgAntes="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqX8DmtnxoQ_Sp7PuWsPialUJ0781v5FvagbjpS-t88g&s=10"
          imgDepois="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGtL-b76vKHgqiN-CL_jM0jNN9WRnI92lsX70f6_tcA&s=10"
        />

      </ScrollView>

    </SafeAreaProvider>
  );
}