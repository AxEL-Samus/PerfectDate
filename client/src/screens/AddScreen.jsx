import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';
import { Card, TextInput, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
// import TextInput from './TextInput';

import { Form, Field, Submit } from 'react-swift-form';
import * as yup from 'yup';
import { useState } from 'react';
import { Formik } from 'formik';
import { addDate } from '../redux/datesSlice/datesSlice';
import { findUserAction } from '../redux/userSlice/userSlice';

const initialValues = {
  rest: '',
  email: '',
  age: 18,
};

const validators = {
  rest: yup.string().required('rest is required').min(3, 'rest must be ...'),
  email: yup.string().required('Kino is required').email('Invalid kino'),
  age: yup
    .number()
    .min(18, 'You must be at least 18 years old')
    .max(80, 'You must be younger than 80 years old'),
};

// 1
export default function AddScreen({ navigation }) {
  const onFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const dispatch = useAppDispatch();

  const [selectLove, setLove] = useState('');
  const [title, setTitle] = useState('');
  const [rest, setRest] = useState({});
  const [park, setPark] = useState({});
  const user = useAppSelector((store) => store.userSlice);
  useEffect(() => {
    dispatch(findUserAction());
  }, []);
  const submitHandler = () => {
    dispatch(
      addDate({
        loveId: 1,
        restLat: rest.restLat,
        restLng: rest.restLng,
        restTitle: rest.restTitle,
        title,
        parkLat: park.parkLat,
        parkLng: park.parkLng,
        parkTitle: park.parkTitle,
        restImg:
          'https://www.restoclub.ru/uploads/place_thumbnail_big/9/c/e/5/9ce56194489bddde28096b1f1dd74562.jpg',
        userId: user.id,
      }),
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{
          title: '',
          kinoDate: '',
          parkLat: '',
          parkLng: '',
          parkTitle: '',
          restLat: '',
          restLng: '',
          restTitle: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dateHandler(
            values.title,
            values.kinoDate,
            values.parkLat,
            values.parkLng,
            values.partTitle,
            values.restLat,
            values.restLng,
            values.restTitle,
          );
          resetForm({ values: '' });
        }}
      >
        <>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Form initialState={initialValues} validator={validators}>
                <Field id="love">
                  {({ value, error, changeValue }) => (
                    <TextInput
                      value={value}
                      error={error}
                      onChangeText={(text) => changeValue(setLove(text))}
                      placeholder=""
                      label="Девушка"
                    />
                  )}
                </Field>
                <Field id="title">
                  {({ value, error, changeValue }) => (
                    <TextInput
                      value={value}
                      error={error}
                      onChangeText={(text) => changeValue(setTitle(text))}
                      placeholder=""
                      label="Название свидания"
                    />
                  )}
                </Field>
                {selectLove === 'Катя' && (
                  <>
                    <Text> Лучшим выбором будет начать свидание в этих ресторанах: </Text>

                    <RNPickerSelect
                      onValueChange={(value) => setRest(value)}
                      items={[
                        {
                          label: 'Якитория',
                          value: {
                            restLat: '55.759971',
                            restLng: '37.611643',
                            restTitle: 'Якитория',
                          },
                        },
                        {
                          label: 'Dr. Живаго',
                          value: {
                            restLat: '55.756778',
                            restLng: '37.614279',
                            restTitle: 'Dr. Живаго',
                          },
                        },
                        {
                          label: 'White Rabbit',
                          value: {
                            restLat: '55.7470578',
                            restLng: '37.5777096',
                            restTitle: 'White Rabbit',
                          },
                        },
                      ]}
                    />
                    {!rest == !{} && <Text> После ресторана следует вызвать ей такси </Text>}
                  </>
                )}
                {selectLove === 'Оля' && (
                  <>
                    <Text> Лучшим выбором будет начать свидание с прогулки по парку </Text>
                    <RNPickerSelect
                      onValueChange={(value) => setPark(value)}
                      items={[
                        {
                          label: 'Сокольники',
                          value: {
                            parkLat: '55.770864',
                            parkLng: '37.755265',
                            parkTitle: 'Сокольники',
                          },
                        },
                        {
                          label: 'Измайловский',
                          value: {
                            parkLat: '55.770864',
                            parkLng: '37.755265',
                            parkTitle: 'Измайловский',
                          },
                        },
                        {
                          label: 'Коломенский',
                          value: {
                            parkLat: '55.662907',
                            parkLng: '37.665202',
                            parkTitle: 'Коломенский',
                          },
                        },
                      ]}
                    />
                    {park.parkTitle === 'Сокольники' && (
                      <>
                        <Text>
                          {' '}
                          После Сокольников идеальным вариантом будет удивить ее этими местами{' '}
                        </Text>
                        <RNPickerSelect
                          onValueChange={(value) => setRest(value)}
                          items={[
                            {
                              label: 'Ерш',
                              value: {
                                restLat: '55.821612',
                                restLng: '37.660647',
                                restTitle: 'Ерш',
                              },
                            },
                            {
                              label: 'ДжонДжоли',
                              value: {
                                restLat: '55.810727',
                                restLng: '37.638079',
                                restTitle: 'ДжонДжоли',
                              },
                            },
                            {
                              label: 'Тануки',
                              value: {
                                restLat: '55.795468',
                                restLng: '37.705499',
                                restTitle: 'Тануки',
                              },
                            },
                          ]}
                        />
                        <Text> Ваше свидание укомплектовано </Text>
                      </>
                    )}
                  </>
                )}

                {/* <Field id="email">
  {({ value, error, changeValue }) => (
    <TextInput
      value={value}
      error={error}
      onChangeText={changeValue}
      placeholder="кинотеатр"
      label="Время кино"
    />
  )}
</Field> */}

                {/* <View
            style={styles.card}
          >
          </View>
                <Field id="age">
                  {({ value, error, changeValue }) => (
                    <TextInput
                      value={value}
                      error={error}
                      onChangeText={(text) => changeValue(parseInt(text) || 0)}
                      placeholder="Парк"
                      label="Парк"
                      keyboardType="number-pad"
                    />
                  )}
                </Field> */}

                <Submit onSubmit={onFormSubmit}>
                  {({ submit }) => <Button title="Submit" onPress={submitHandler} />}
                </Submit>
              </Form>
            </Card>
          </View>
        </>
      </Formik>
    </TouchableWithoutFeedback>
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
