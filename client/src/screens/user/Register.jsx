import React from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { registrationAction } from '../../redux/userSlice/userSlice';
import { setUserFirestorm } from '../../redux/userSlice/fireStormSlice';

export function Register({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const registerHandler = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUserFirestorm({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          }),
        );
      })
      .catch(console.error);
    dispatch(registrationAction({ email, password, name }));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={(values, { resetForm }) => {
          registerHandler(values.email, values.password, values.name);
          resetForm({ values: '' });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Image
              source={{
                uri: 'https://freesvg.org/img/publicdomainq-couple_love.png',
              }}
              style={{ width: 350, height: 300, marginTop: 0 }}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              >
                Регистрация
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 55,
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 7,
                  width: 300,
                  height: 40,
                }}
              >
                <TextInput
                  style={{ paddingHorizontal: 10 }}
                  placeholder="Имя"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 55,
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 7,
                  width: 300,
                  height: 40,
                }}
              >
                <TextInput
                  style={{ paddingHorizontal: 10 }}
                  placeholder="Электронная почта"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 55,
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 7,
                  width: 300,
                  height: 40,
                }}
              >
                <TextInput
                  style={{ paddingHorizontal: 10 }}
                  placeholder="Придумайте пароль"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 55,
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 7,
                  width: 200,
                  height: 40,
                  marginLeft: 105,
                }}
              >
                <Button onPress={handleSubmit} title="Регистрация" />
              </View>
            </View>
          </>
        )}
      </Formik>
    </TouchableWithoutFeedback>
  );
}
