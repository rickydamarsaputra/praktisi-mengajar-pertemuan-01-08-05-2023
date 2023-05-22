import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, Todo, TentangKami} from './pages'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="TentangKami" component={TentangKami} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;