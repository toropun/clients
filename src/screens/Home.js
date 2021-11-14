import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
import AssetExample from '../components/AssetExample';

export default function Home({ navigation }) {
  const stateClients = useSelector((state) => state.clients)
  const [clients, setClients] = useState(stateClients);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.paragraph}
      onPress={() => {
        navigation.navigate('Client', { client: item });
      }}>
      <AssetExample
        text={`${item.name}, ${item.surname}, ${item.age}`}
        textColor="green"
      />
    </TouchableOpacity>
  );

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();

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

    const o = {name: name};
    const a = { name };
    setClients([...clients, newClient]);

    setClients((ourClients) => [...ourClients, newClient]);
  };
  const dispatch = useDispatch()


  const onAddClient = (client) => {
    dispatch({
      type: "addClient",
      payload: client
    })
    setClients([...clients, client]);
  }
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
      <Button title="Add client other screen" onPress={() => navigation.navigate('AddClient', {onAddClient})} />
      <FlatList
        data={clients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
