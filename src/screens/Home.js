import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { addClient } from '../reducers/clientsReducer';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import AssetExample from '../components/AssetExample';

export default function Home({ navigation }) {
  const clients = useSelector((state) => state.clients)
  const [filteredClients, setFilteredClients] = useState(clients);

  const [showYounger, setShowYounger] = useState(false);

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

  useEffect(() => {
    //analog componentDidMount
  }, [])

  useEffect(() => {
    console.log('showYounger', showYounger);
    const newFilteredClients = clients.filter(client => !showYounger || (showYounger && client.age < 40));
    setFilteredClients(newFilteredClients);
  }, [showYounger, clients])
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: 'brown', width: '100%', height: 24 }}></View>

      <View style={{ backgroundColor: '#E02329', width: '100%', height: 56 }}>
        <Text style={styles.line}>Клиенты</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="Моложе 40" color={showYounger ? 'blue' : 'grey'} onPress={() => setShowYounger(true)} />
        <Button title="All"  color={!showYounger ? 'blue' : 'grey'} onPress={() => setShowYounger(false)} />
      </View>
      <Button title="Add client other screen" onPress={() => navigation.navigate('AddClient', {onAddClient})} />
      <FlatList
        data={filteredClients}
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
