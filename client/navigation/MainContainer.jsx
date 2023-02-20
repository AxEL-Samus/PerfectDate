import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../src/screens/HomeScreen';
import AddScreen from '../src/screens/input/AddScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import { Login } from '../src/screens/user/Login';
import MainPage from '../src/screens/MainPage';

const debugCard = 'Меню отладки'
const profileName = 'Профиль';
const homeName = 'Свидания';
const addName = 'Добавить';
const loginName = 'Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
              } 
              else if (rn === addName) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn === profileName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 },
          }}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          {/* <Tab.Screen name={loginName} component={Login} /> */}
          <Tab.Screen name={addName} component={AddScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
          <Tab.Screen name={debugCard} component={MainPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
