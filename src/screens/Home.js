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
import AssetExample from '../components/AssetExample';

export default function Home({ navigation }) {
  const employers = [
    {
      name: 'Иван',
      surname: 'Иванов',
      age: 25,
      fathername: 'Иванович',
      phonenumber: '+7-900-123-45-67',
      cardnumber: 100500,
      naruki: 0,
      isBlocked: false,
    },
    {
      name: 'Сергей',
      surname: 'Сидоров',
      age: 45,
      isBlocked: true,
    },
    {
      name: 'Измаил',
      surname: 'Игнатов',
      age: 50,
      isBlocked: false,
    },
  ];

  const [clients, setClients] = useState(employers);

  const employersList = employers.map((item) => {
    let cvet = 'black';
    if (item.block === 'Нет') {
      cvet = 'red';
    } else {
      cvet = item.age < 40 ? 'green' : 'black';
    }
  });

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

  const onAddClient = (client) => {
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
