import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './src/reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Client from './src/screens/ClientScreen';
import AddClient from './src/screens/AddClient';

const Stack = createStackNavigator();

const store = createStore(combineReducers);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'>
          <Stack.Screen name="Client" component={Client}  options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} /> 
                  <Stack.Screen name="AddClient" component={AddClient} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}