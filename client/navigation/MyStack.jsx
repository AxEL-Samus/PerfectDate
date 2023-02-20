import * as React from 'react';

import { Login } from '../src/screens/user/Login';
import { Register } from '../src/screens/user/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';

const AuthStack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Домой" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
