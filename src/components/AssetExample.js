import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample({text, textColor}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.paragraph, {color: textColor}]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  paragraph: {
    backgroundColor: '#C4C4C4',
    fontSize: 20,
    fontWeight: "500",
    textAlign: 'left',
    flex: 1,
    height: 52,
    marginHorizontal: 17,
    padding: 12
  },
});