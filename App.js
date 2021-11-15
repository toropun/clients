import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducer from './src/reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './src/screens/Home';
import { PersistGate } from 'redux-persist/integration/react';
import Client from './src/screens/ClientScreen';
import AddClient from './src/screens/AddClient';

const Stack = createStackNavigator();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, combineReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)
  

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen name="Client" component={Client}  options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="AddClient" component={AddClient} /> 
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}