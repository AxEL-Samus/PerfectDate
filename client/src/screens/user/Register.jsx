import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useAuth } from '../../redux/userSlice/fireStormSlice';

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
  const [select, setSelect] = useState('');

  const registerHandler = (email, password, name, sex) => {
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
    dispatch(registrationAction({ email, password, name, sex: select }));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{ email: '', password: '', name: '', sex: '' }}
        onSubmit={(values, { resetForm }) => {
          registerHandler(values.email, values.password, values.name, values.sex);
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
                  style={{
                    height: 40,
                    margin: 12,
                    width: 290,
                    padding: 10,
                  }}
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
                  style={{
                    height: 40,
                    margin: 12,
                    width: 290,
                    padding: 10,
                  }}
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
                  style={{
                    height: 40,
                    margin: 12,
                    width: 290,
                    padding: 10,
                  }}
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
                  marginHorizontal: 55,
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 7,
                  width: 300,
                  height: 40,
                }}
              >
                <RNPickerSelect
                  onValueChange={(value) => setSelect(value)}
                  items={[
                    { label: 'Мужчина', value: 'Мужчина' },
                    { label: 'Девушка', value: 'Девушка' },
                  ]}
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
