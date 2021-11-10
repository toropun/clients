import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Client from './src/screens/ClientScreen';
import AddClient from './src/screens/AddClient';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name="Client" component={Client}  options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} /> 
                <Stack.Screen name="AddClient" component={AddClient} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}