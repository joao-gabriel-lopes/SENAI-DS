import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Button
        title="Ir para lista de passaportes"
        onPress={() => router.push("passaporte/listaScreen")}
      />
    </View>
  );
}