
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import InfoLine from '../components/InfoLine';

export default function Client({ navigation, route }) {
  const { client } = route.params;

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'brown',
            width: '100%',
            height: 24,
          }}></View>

        <View style={{ backgroundColor: '#E02329', width: '100%', height: 56 }}>
          <Text style={styles.line}>Клиент Ivan</Text>
        </View>

        <Button title="Go to Home" onPress={() => navigation.goBack()} />

        <InfoLine text={client.surname} header="Фамилия:" />

        <InfoLine text={client.name} header="Имя:" />

        <InfoLine text={client.fathername} header="Отчество:" />

        <InfoLine text={client.phonenumber} header="Телефон:" />

        <InfoLine text={client.cardnumber} header="Номер карты:" />
      </View>

      <View style={styles.text4}>
        <InfoLine text={client.isBlocked ? "Да" : "Нет"} header="Клиент заблокирован?" style={{backgroundColor: client.isBlocked ? 'red' : 'green'}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  line: {
    color: 'white',
    fontWeight: 500,
    fontSize: 20,
    marginVertical: 14,
    marginLeft: 16,
  },
  text2: {
    color: 'black',
    fontWeight: 400,
    fontSize: 12,
    marginTop: 24,
    marginLeft: 17,
  },
  text3: {
    color: 'black',
    fontWeight: 400,
    fontSize: 16,
    marginTop: 4,
    marginLeft: 16,
  },
  text4: {
    color: 'white',
    backgroundColor: '#00000',
    width: '100%',
  },
});
