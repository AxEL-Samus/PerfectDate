import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import { Card, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Form, Field, Submit } from 'react-swift-form';
import { Formik } from 'formik';
import { getType } from '../redux/typeSlice/typeSlice';

export default function AddScreen({ navigation }) {
  const [attr, setAttr] = useState('');
  const dispatch = useAppDispatch();
  const allTypes = useAppSelector((store) => store.typeSlice.type);

  useEffect(() => {
    dispatch(getType());
  }, []);

  return (
    <>
      {allTypes.map((type) => (
        <>
          <View>
            <Text>Выберите {type.name}</Text>
          </View>

          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            // items={[
            //   { label: 'uigutg', value: 'football' },
            //   { label: 'Кино', value: 'baseball' },
            //   { label: 'Мастер-класс', value: 'hockey' },
            // ]}
            items={type.Attractions.map((el) => ({ label: el.name, value: el.name }))}
          />
        </>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 24,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    padding: 12,
  },
});
