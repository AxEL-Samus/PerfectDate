import * as React from 'react';
import { Text, View } from 'react-native';
import MyStack from '../../navigation/MyStack';
import MainPage from './MainPage';

export default function HomeScreen() {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          onPress={() => navigation.navigate('HomeScreen')}
          style={{ fontSize: 26, fontWeight: 'bold' }}
        ></Text>
      </View>
      <MainPage />
    </>
  );
}
