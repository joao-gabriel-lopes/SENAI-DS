import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/dedicatoria/dedicatoria" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/sumario/sumario" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/contracapa/contracapa" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/paginas/pagina1" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/paginas/pagina2" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/paginas/pagina3" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/paginas/pagina4" options={{headerShown: false}} />
        <Stack.Screen name="telas/livro/paginas/pagina5" options={{headerShown: false}} />
      </Stack>
  );
}
