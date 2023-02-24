import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';

const initialState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    findUser(state, action) {
      return action.payload;
    },
    setUser(state, action) {
      return action.payload;
    },
    logoutUser(state, action) {
      return null;
    },
  },
});

export const { findUser, setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const findUserAction = () => (dispatch) => {
  axios('/api/users')
    .then((res) => dispatch(findUser(res.data)))
    .catch(console.log);
};

export const registrationAction = (regInput) => (dispatch) => {
  axios
    .post('/api/users/signup', regInput)
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => {
      Alert.alert('Error', err.response.data.message);
      console.log(err);
    });
};
export const loginAction = (input) => (dispatch) => {
  axios
    .post('/api/users/login', input)
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const logoutAction = () => (dispatch) => {
  axios
    .get('/api/users/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
