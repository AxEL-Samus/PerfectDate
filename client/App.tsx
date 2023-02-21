import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import store from './src/redux/store';
import axios from 'axios';
import MainContainer from './navigation/MainContainer';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://192.168.3.208:3002';

const App = () => {
  return (
    // <BrowserRouter>
    <Provider store={store}>
      {/* <NavigationContainer> */}
      {/* <Navigation / */}
      {/* </NavigationContainer> */}
      <MainContainer />
      <NavigationContainer>{/* <Navigation /> */}</NavigationContainer>
    </Provider>
    // </BrowserRouter>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
