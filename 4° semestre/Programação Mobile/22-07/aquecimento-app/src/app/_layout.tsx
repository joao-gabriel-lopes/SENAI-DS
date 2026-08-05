import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
      <Stack> />
        <Stack.Screen name="index" options={{ title: 'Tela inicial', headerTitleAlign: 'center'}}
        <Stack.Screen name="telas/produto/lista/listaProdutos" options={{ title: 'Lista de produtos', headerTitleAlign: 'center'}} />
      </Stack>
  );
}
