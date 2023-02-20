import React from 'react';
import { Button, TextInput, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setUserFirestorm } from '../../redux/userSlice/fireStormSlice';
import { auth } from '../../../config/firebase';
import { loginAction } from '../../redux/userSlice/userSlice';

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUserFirestorm({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          }),
        );
      })
      .catch((error) => Alert.alert('Invalid user!', error.message));
    dispatch(loginAction({ email, password }));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        ('dismiss keyboard');
      }}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          handleLogin(values.email, values.password);
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
                Войдите что бы начать
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
                  placeholder="Введите логин"
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
                  placeholder="Введите пароль"
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
                  width: 100,
                  height: 40,
                  marginLeft: 150,
                }}
              >
                <Button onPress={handleSubmit} title="Войти" />
              </View>
              <View
                style={{
                  marginTop: 40,
                }}
              >
                <Text
                  onPress={() => navigation.navigate('Register')}
                  style={{
                    marginTop: 10,
                    alignSelf: 'center',
                  }}
                >
                  Или зарегистрируйтесь
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </TouchableWithoutFeedback>
  );
};
