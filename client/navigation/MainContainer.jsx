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
import addLove from '../src/screens/AddLove';
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
            activeTintColor: 'blue',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 },
          }}
        >
          {isAuth ? (
            <>
              <Tab.Screen name={homeName} component={HomeScreen} />
              <Tab.Screen name={addName} component={AddScreen} />
              <Tab.Screen name={profileName} component={ProfileScreen} />
            </>
          ) : (

            <>
              <Tab.Screen
                name="Perfect Date"
                // component={HomeNavigator}
                component={HomeNavigator}
                options={{ headerShown: false }}
              />
              {/* <Tab.Screen
                name="Perfect Date"
                component={addLove}
                options={{ headerShown: false }}
              /> */}
              {/* <Tab.Screenr
                name="Perfect Date"
                component={AuthNavigator}
                options={{ headerShown: false }}
              /> */}
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const AuthStack = createNativeStackNavigator();

// function AuthNavigator() {
//   return (
//     <AuthStack.Navigator initialRouteName="Login">
//       <AuthStack.Screen name="Login" component={Login} />
//       <AuthStack.Screen name="Register" component={Register} />
//     </AuthStack.Navigator>
//   );
//

function HomeNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
