import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./src/screens/QuizIndex";
import Quiz from "./src/screens/Quiz";


// export default function App(): JSX.Element {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Идеальное свидание"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});

export default createAppContainer(MainStack);