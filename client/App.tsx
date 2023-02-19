import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuizIndex from './src/screens/QuizIndex';
import Quiz from './src/screens/Quiz';
import MainPage from './src/screens/MainPage';
import Navigate from './Navigate';
import axios from 'axios';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ApplicationProvider } from '@ui-kitten/components';

axios.defaults.baseURL = 'http://localhost:3001';

export default function App(): JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <ApplicationProvider>
        {/* <NavigationContainer> */}
        <Navigate />
        {/* </NavigationContainer> */}
      </ApplicationProvider>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const MainStack = createStackNavigator({
//   QuizIndex: {
//     screen: QuizIndex,
//     navigationOptions: {
//       headerTitle: 'Идеальное свидание',
//     },
//   },
//   Quiz: {
//     screen: Quiz,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: navigation.getParam('title'),
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: navigation.getParam('color'),
//         borderBottomColor: navigation.getParam('color'),
//       },
//     }),
//   },
//   MainPage: {
//     screen: MainPage,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: navigation.getParam('title'),
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: navigation.getParam('color'),
//         borderBottomColor: navigation.getParam('color'),
//       },
//     }),
//   },
// });

// export default createAppContainer(MainStack);
