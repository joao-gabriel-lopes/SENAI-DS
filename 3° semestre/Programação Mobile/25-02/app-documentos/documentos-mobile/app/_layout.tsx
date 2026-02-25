import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Menu principal' }}
      />
      <Stack.Screen
        name="cadastro"
        options={{ title: 'Cadastro de passaporte' }}
      />      
      <Stack.Screen
        name="pesquisa"
        options={{ title: 'Pesquisa de passaporte' }}
      />
    </Stack>
  );
}