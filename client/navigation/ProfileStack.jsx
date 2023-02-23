import * as React from 'react';

import NameChange from '../src/screens/profile/NameChange';
import Push from '../src/screens/profile/Push';
import Settings from '../src/screens/profile/Settings';
import StyleSettings from '../src/screens/profile/StyleSettings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUs from '../src/screens/profile/AboutUs';
import Profile from '../src/screens/profile/Profile';
import { Login } from '../src/screens/user/Login';
import AddLoveNative from '../src/screens/AddLoveNative';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="NameChange" component={NameChange} />
      {/* <Stack.Screen name="Settings" component={AddLoveNative} /> */}
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Push" component={Push} />
      <Stack.Screen name="Love" component={AddLoveNative} options={{ headerShown: false }}/>
      <Stack.Screen name="StyleSettings" component={StyleSettings} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
}
