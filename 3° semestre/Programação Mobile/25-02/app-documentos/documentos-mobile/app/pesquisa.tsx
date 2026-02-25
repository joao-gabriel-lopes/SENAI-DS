import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Pesquisa() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Ir para Cadastro com o id 5"
        onPress={() => router.push({pathname: "/cadastro", params: {id: 5}})}
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