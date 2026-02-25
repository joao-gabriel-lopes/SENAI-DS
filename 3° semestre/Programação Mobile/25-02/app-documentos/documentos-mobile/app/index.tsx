import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Ir para Pesquisar"
        onPress={() => router.push("/pesquisa")}
      />
      <Button
        title="Ir para Cadastro"
        onPress={() => router.push("/cadastro")}
      />
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