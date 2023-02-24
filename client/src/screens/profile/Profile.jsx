import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
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
      }}
    >
      <Card
        style={{
          width: 350,
          height: 70,
          marginTop: 20,
          alignSelf: 'center',
          shadowOpacity: 1,
          shadowColor: 'lightblue',
        }}
      >
        <Image
          source={{
            uri: 'https://sun1-89.userapi.com/impg/VJtz54ZIDDcc7uwXwKAoj4sG3EH1XD9M1fD9vA/2EvUKWUz5d4.jpg?size=50x0&quality=96&crop=0,0,750,750&sign=adf77455259f834cf24bee6303031a61&ava=1',
          }}
        />
        <Text
          onPress={() => navigation.navigate('NameChange')}
          style={{ fontSize: '20', alignSelf: 'center', padding: 20 }}
        >
          {user.email}
        </Text>
      </Card>
      <Card
        style={{
          width: 350,
          height: 70,
          marginTop: 20,
          alignSelf: 'center',
          shadowOpacity: 1,
          shadowColor: 'lightblue',
        }}
      >
        <Text
          onPress={() => navigation.navigate('StyleSettings')}
          style={{ fontSize: '20', alignSelf: 'center', padding: 20 }}
        >
          Настройки стилей
        </Text>
      </Card>
      <Card
        style={{
          width: 350,
          height: 70,
          marginTop: 20,
          alignSelf: 'center',
          shadowOpacity: 1,
          shadowColor: 'lightblue',
        }}
      >
        <Text
          onPress={() => navigation.navigate('Love')}
          style={{ fontSize: '20', alignSelf: 'center', padding: 20 }}
        >
          Настройка интересов
        </Text>
      </Card>

      <Card
        style={{
          width: 350,
          height: 70,
          marginTop: 20,
          alignSelf: 'center',
          shadowOpacity: 1,
          shadowColor: 'lightblue',
        }}
      >
        <Text
          onPress={() => navigation.navigate('AboutUs')}
          style={{ fontSize: '20', alignSelf: 'center', padding: 20 }}
        >
          О нас
        </Text>
      </Card>
      <Card
        style={{
          width: 100,
          height: 50,
          marginTop: 20,
          alignSelf: 'center',
          shadowOpacity: 1,
          shadowColor: 'lightblue',
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              fontSize: '20',
              alignSelf: 'center',
              padding: 12,
            }}
            onPress={() => {
              dispatch(logoutAction());
              dispatch(removeUserFirestorm());
              navigation.navigate('Login');
            }}
          >
            Выйти
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}
