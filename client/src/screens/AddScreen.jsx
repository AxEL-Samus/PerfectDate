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

  console.log(attr, '777-9-777');

  useEffect(() => {
    dispatch(getType());
  }, []);

  return (
    <>
      <View style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          style={{
            alignItems: 'center',
            margin: 20,
            width: 350,
            height: 50,
            backgroundColor: 'lightblue',
          }}
        >
          {allTypes
            .filter((el) => el.name === 'Ресторан')
            .map((type) => (
              <>
                <View>
                  <Text style={{ fontSize: '20' }}>Выберите {type.name}</Text>
                </View>
                <RNPickerSelect
                  onValueChange={(value) => setAttr(value)}
                  // items={[
                  //   { label: 'uigutg', value: 'football' },
                  //   { label: 'Кино', value: 'baseball' },
                  //   { label: 'Мастер-класс', value: 'hockey' },
                  // ]}
                  items={type.Attractions.map((el) => ({
                    label: el.name,
                    value: { name: el.name, id: el.id },
                  }))}
                />
              </>
            ))}
        </Card>
        <Card
          style={{
            alignItems: 'center',
            margin: 20,
            width: 350,
            height: 50,
            backgroundColor: 'lightblue',
          }}
        >
          {allTypes
            .filter((el) => el.name === 'Кино')
            .map((type) => (
              <>
                <View>
                  <Text style={{ fontSize: '20' }}>Выберите {type.name}</Text>
                </View>
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  // items={[
                  //   { label: 'uigutg', value: 'football' },
                  //   { label: 'Кино', value: 'baseball' },
                  //   { label: 'Мастер-класс', value: 'hockey' },
                  // ]}
                  items={type.Attractions.map((el) => ({
                    label: el.name,
                    value: { name: el.name, id: el.id },
                  }))}
                />
              </>
            ))}
        </Card>
        <Card
          style={{
            alignItems: 'center',
            margin: 20,
            width: 350,
            height: 50,
            backgroundColor: 'lightblue',
          }}
        >
          {allTypes
            .filter((el) => el.name === 'Парк')
            .map((type) => (
              <>
                <View>
                  <Text style={{ fontSize: '20' }}>Выберите {type.name}</Text>
                </View>
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  // items={[
                  //   { label: 'uigutg', value: 'football' },
                  //   { label: 'Кино', value: 'baseball' },
                  //   { label: 'Мастер-класс', value: 'hockey' },
                  // ]}
                  items={type.Attractions.map((el) => ({
                    label: el.name,
                    value: { name: el.name, id: el.id },
                  }))}
                />
              </>
            ))}
        </Card>
      </View>
      <TouchableWithoutFeedback>
        <Button>
          <Text
            style={{ fontSize: '20' }}
            onPress={() => {
              submitHandler;
            }}
          >
            Далее
          </Text>
        </Button>
      </TouchableWithoutFeedback>
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
