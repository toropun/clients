import React, { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { addClient } from '../reducers/clientsReducer';
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
  const clients = useSelector((state) => state.clients)

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

  
  const dispatch = useDispatch()

  const onAddClient = (client) => {
    dispatch(addClient(client)) 
    console.log('dispatch', client);
  }
  console.log('render', clients)
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: 'brown', width: '100%', height: 24 }}></View>

      <View style={{ backgroundColor: '#E02329', width: '100%', height: 56 }}>
        <Text style={styles.line}>Клиенты</Text>
      </View>
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
