import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from '../src/screens/MainPage';
import Quiz from '../src/screens/Quiz';
import QuizIndex from '../src/screens/QuizIndex';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
