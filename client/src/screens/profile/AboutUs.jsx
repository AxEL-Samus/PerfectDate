import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('AboutUs')} style={styles.container1}>
        <Text style={styles.paragraph}>Команда разработчиков:</Text>
      </Text>
      <Text style={styles.container1}>
        <Text style={styles.paragraph}>1. Алексей Грязнев</Text>
      </Text>
      <Text style={styles.container1}>
        <Text style={styles.paragraph}>2. Максим Грушецкий</Text>
      </Text>
      <Text style={styles.container1}>
        <Text style={styles.paragraph}>3. Андрей Нгуен</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
});
