import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Cadastro() {
  const { id } = useLocalSearchParams()

  if (id){
    var conteudo = `Cadastro com o id ${id}`
  } else{
    var conteudo = `Id indisponível`
  }

  return (
    <View style={styles.container}>
        <Text>{conteudo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});