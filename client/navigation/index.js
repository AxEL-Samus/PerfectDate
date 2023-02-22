import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../src/screens/MainPage';
import Quiz from '../src/screens/Quiz';
import QuizIndex from '../src/screens/QuizIndex';
import Home from '../src/screens/Home';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Домой" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Карточки" component={MainPage} />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        navigationOptions={({ navigation }) => ({
          headerTitle: navigation.getParam('title'),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: navigation.getParam('color'),
            borderBottomColor: navigation.getParam('color'),
          },
        })}
      />
      <Stack.Screen name="Свидания" component={QuizIndex} />
    </Stack.Navigator>
  );
}

export default Navigation;
