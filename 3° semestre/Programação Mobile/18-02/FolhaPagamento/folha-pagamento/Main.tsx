import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './App';
import Funcionarios from './Funcionarios';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={App} />
      <Stack.Screen name="Funcionarios" component={Funcionarios} />
    </Stack.Navigator>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}