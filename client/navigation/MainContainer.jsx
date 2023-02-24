import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../src/screens/HomeScreen';
import AddScreen from '../src/screens/AddScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import { useAuth } from '../../client/src/redux/userSlice/fireStormSlice';

import { Login } from '../src/screens/user/Login';
import { Register } from '../src/screens/user/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import App from '../src/screens/AddLove';
import PRNRadioForm from '../src/screens/AddLove';
import MainPage from '../src/screens/MainPage';
import { View } from 'react-native';
// import AddLoveRadio from '../src/screens/AddLoveRadio';

const debugCard = 'Меню отладки';
const profileName = 'Профиль';
const homeName = 'Свидания';
const addName = 'Добавить';
const loginName = 'Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer({ user }) {
  const { isAuth } = useAuth();

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
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 0, height: 70 },
          }}
        >
          {isAuth ? (
            <>
              <Tab.Screen name={homeName} component={HomeScreen} />
              <Tab.Screen name={addName} component={AddScreen} />
              <Tab.Screen name={profileName} component={ProfileScreen} />
            </>
          ) : (
            <Tab.Screen
              name="PERFECT DATE"
              component={HomeNavigator}
              options={{ headerShown: false }}
            />
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const AuthStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
