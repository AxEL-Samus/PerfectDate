import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation';
// import store from './src/redux/store';

const App = () => {
  return (
    // <BrowserRouter>
    // <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    // {/* </Provider> */}
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