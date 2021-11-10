import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function InfoLine({text, header, style}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text2}>{header} </Text>
      <Text style={styles.text3}>{text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
text2: {
    color: 'black',
    fontWeight: "400",
    fontSize: 12,
    marginTop: 24,
    marginLeft: 17,
  },
  text3: {
    color: 'black',
    fontWeight: "400",
    fontSize: 16,
    marginTop: 4,
    marginLeft: 16,
  },
});