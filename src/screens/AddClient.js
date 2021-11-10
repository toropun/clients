import React, { useState } from 'react';
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


export default function AddClient({ navigation, route }) {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();

  const  {onAddClient} = route.params;

  const addClients = () => {
    const defaultClient = {
      name: 'Измаил',
      surname: 'Игнатов',
      age: 50,
      isBlocked: false,
    };

    const newClient = {
      ...defaultClient,
      name,
      surname,
      age: age
    };
    onAddClient(newClient);
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
        onChangeText={setName}
        value={name}
        placeholder="Введите имя"
      />

      <TextInput
        style={{ height: 44, width: '100%', backgroundColor: 'white', marginTop: 10 }}
        onChangeText={setSurname}
        value={surname}
        placeholder="Введите фамилию"
      />

      <TextInput
        style={{ height: 44, width: '100%', backgroundColor: 'white', marginTop: 10 }}
        onChangeText={setAge}
        value={age}
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
    fontWeight: 500,
    fontSize: 20,
    marginVertical: 14,
    marginLeft: 16,
  },
});
