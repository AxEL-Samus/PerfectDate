import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { removeUserFirestorm } from '../../redux/userSlice/fireStormSlice';
import { findUserAction, logoutAction } from '../../redux/userSlice/userSlice';

export default function Profile({ navigation }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userFirestorm);
  useEffect(() => {
    dispatch(findUserAction());
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        // height: '70%',
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
          backgroundColor: 'lightgrey',
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
          {user.email}
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
          backgroundColor: 'lightgrey',
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
          backgroundColor: 'lightgrey',
        }}
      >
        <Text
          onPress={() => navigation.navigate('Love')}
          style={{ fontSize: 26, fontWeight: 'bold' }}
        >
          Настроить интересы
        </Text>
      </View>
      
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 2,
          marginBottom: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 350,
          height: 90,
          position: 'relative',
          backgroundColor: 'lightgrey',
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
          // flex: 1,
          // alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          // marginTop: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 150,
          height: 50,
          backgroundColor: 'lightgrey',
          // position: 'relative',
          marginLeft: 120,
          marginTop: 280,
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
