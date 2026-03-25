import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Tela inicial' }} />
        <Stack.Screen name="screens/sobre/sobreScreen" options={{ title: 'Sobre nós'}} />
      </Stack>
  );
}
