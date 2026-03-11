import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="cadastro/page"
        options={{ title: 'Cadastro de carteiras' }}
      />
      <Stack.Screen
        name="lista/page"
        options={{ title: 'Lista de carteiras' }}
      />
    </Stack>
  );
}
