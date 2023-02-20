import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../src/screens/HomeScreen';
import AddScreen from '../src/screens/AddScreen';
import ProfileScreen from '../src/screens/ProfileScreen';

const profileName = 'Профиль';
const homeName = 'Домой';
const addName = 'Добавить';

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
              } else if (rn === addName) {
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
          <Tab.Screen name={addName} component={AddScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
