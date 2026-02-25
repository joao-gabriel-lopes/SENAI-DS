import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Menu principal' }}
      />
      <Stack.Screen
        name="passaporte/cadastroScreen"
        options={{ title: 'Cadastro de passaporte' }}
      />      
      <Stack.Screen
        name="passaporte/listaScreen"
        options={{ title: 'Lista de passaporte' }}
      />
    </Stack>
  );
}