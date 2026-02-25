import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const router = useRouter();
  return (
    <View>
      <Button
        title="Ir para Details"
        onPress={() => router.push("/details")}
      />

      <Button
        title="Ir para Details com id = 10"
        onPress={() => router.push({pathname: "/details", params: {id: 10, nome: "Pedro"}})}
      />

    </View>
  );
}
