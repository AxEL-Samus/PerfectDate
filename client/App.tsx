import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyleSheet, Switch, View, LogBox } from 'react-native';
import Navigation from './navigation';
import store from './src/redux/store';
import axios from 'axios';
import MainContainer from './navigation/MainContainer';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3002';

const App = ({ user }) => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <Provider store={store}>
        <MainContainer user={user} />
      </Provider>
    </>
  );
};

export default App;
