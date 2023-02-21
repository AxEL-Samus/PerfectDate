import React from 'react';
import { View, Text } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('AboutUs')}
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >
        About
      </Text>
    </View>
  );
}
