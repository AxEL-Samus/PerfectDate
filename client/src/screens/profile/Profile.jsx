import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { removeUserFirestorm } from '../../redux/userSlice/fireStormSlice';
import { findUserAction, logoutAction } from '../../redux/userSlice/userSlice';

export default function Profile({ navigation }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userSlice);
  useEffect(() => {
    dispatch(findUserAction());
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 350,
          height: 90,
          position: 'relative',
        }}
      >
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149452.png',
          }}
          style={{ width: 60, height: 60, position: 'relative' }}
          onPress={() => console.log('1')}
        />
        <Text
          onPress={() => navigation.navigate('NameChange')}
          style={{ fontSize: 20, fontWeight: 'bold' }}
        >
          {`${user.name}`}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 350,
          height: 90,
          position: 'relative',
        }}
      >
        <Text
          onPress={() => navigation.navigate('StyleSettings')}
          style={{ fontSize: 26, fontWeight: 'bold' }}
        >
          Настройки стилей
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 350,
          height: 90,
          position: 'relative',
        }}
      >
        <Text
          onPress={() => navigation.navigate('AboutUs')}
          style={{ fontSize: 26, fontWeight: 'bold' }}
        >
          О нас
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 350,
          height: 40,
          position: 'relative',
        }}
      >
        <Text
          onPress={() => {
            dispatch(logoutAction());
            dispatch(removeUserFirestorm());
            navigation.navigate('Login');
          }}
          style={{ fontSize: 26, fontWeight: 'bold' }}
        >
          Выйти
        </Text>
      </View>
    </View>
  );
}
