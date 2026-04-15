import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Tela inicial', headerTitleAlign: 'center'}} />
        <Stack.Screen name="screens/sobre/sobreScreen" options={{ title: 'Sobre nós', headerTitleAlign: 'center'}} />
        <Stack.Screen name="screens/produto/pesquisa/produtoPesquisaScreen" options={{title: 'Pesquisa de produtos', headerTitleAlign: 'center'}} />
      </Stack>
  );
}
