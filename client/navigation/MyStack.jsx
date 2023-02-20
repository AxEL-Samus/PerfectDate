import * as React from 'react';

import { Login } from '../src/screens/user/Login';
import { Register } from '../src/screens/user/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <AuthStack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
