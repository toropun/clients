import React, { useState , useReducer } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
} from 'react-native';

const initialValue = {
  name: '',
  surname: '',
  age: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'surname':
      return { ...state, surname: action.payload };
    case 'age':
      return { ...state, age: action.payload };
     
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default function AddClient({ navigation, route }) {

  const [client, dispatch] = useReducer(reducer, initialValue);

  const  {onAddClient} = route.params;

  const addClients = () => {
    onAddClient(client);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: 'brown', width: '100%', height: 24 }}></View>

      <View style={{ backgroundColor: '#E02329', width: '100%', height: 56 }}>
        <Text style={styles.line}>Клиенты</Text>
      </View>

      <TextInput
        style={{ height: 44, width: '100%', backgroundColor: 'white',  }}
        onChangeText={(text) => dispatch({ type: "name", payload: text})}
        value={client.name}
        placeholder="Введите имя"
      />

      <TextInput
        style={{ height: 44, width: '100%', backgroundColor: 'white', marginTop: 10 }}
        onChangeText={(text) => dispatch({ type: "surname", payload: text})}
        value={client.surname}
        placeholder="Введите фамилию"
      />

      <TextInput
        style={{ height: 44, width: '100%', backgroundColor: 'white', marginTop: 10 }}
        onChangeText={(text) => dispatch({ type: "age", payload: text})}
        value={client.age}
        placeholder="Введите возраст"
      />

      <Button title="Add client" onPress={() => addClients()} />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  paragraph: {
    paddingTop: 17,
  },
  line: {
    color: '#FFFFFF',
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 14,
    marginLeft: 16,
  },
});
