import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import { Card, TextInput, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hook';

import { Form, Field, Submit } from 'react-swift-form';
import { useState } from 'react';
import { Formik } from 'formik';
import { addDate } from '../redux/datesSlice/datesSlice';

const enterObject = {
  1: 'ресторан',
  2: 'парк',
  9: 'музей',
};

const atraction = [
  { id: 1, glo: '12.412.42', name: 'Ресторан Гоголь1', photo: 'url', typeId: 1 },
  { id: 2, glo: '12.412.42', name: 'Ресторан Гоголь2', photo: 'url', typeId: 1 },
  { id: 3, glo: '12.412.42', name: 'Ресторан Гоголь3', photo: 'url', typeId: 1 },
  { id: 1, glo: '12.412.42', name: 'Парк Сокольники1', photo: 'url', typeId: 2 },
  { id: 2, glo: '12.412.42', name: 'Парк Сокольники2', photo: 'url', typeId: 2 },
  { id: 3, glo: '12.412.42', name: 'Парк Сокольники3', photo: 'url', typeId: 2 },
  { id: 1, glo: '12.412.42', name: 'Музей Победа1', photo: 'url', typeId: 9 },
  { id: 2, glo: '12.412.42', name: 'Музей Победа2', photo: 'url', typeId: 9 },
  { id: 4, glo: '12.412.42', name: 'Ресторан Гоголь4', photo: 'url', typeId: 1 },
];

const type = [
  { id: 1, name: 'Ресторан' },
  { id: 2, name: 'Парк' },
  { id: 9, name: 'Музей' },
];

export default function AddScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const allTypes = useAppSelector((store) => store.typeSlice.type);

  const onFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const [attractionId1, setAttractionId1] = useState('');
  const [attractionId2, setAttractionId2] = useState('');
  const [attractionId3, setAttractionId3] = useState('');

  // const submitHandler = () => {
  //   dispatch(setAttractionId({ id: 1, selectLove, rest, title, park }));
  // };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dateHandler(values.name);
          resetForm({ values: '' });
        }}
      >
        <>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Form initialState={initialValues} validator={validators}>
                {/* <Field id="love">
                  {({ value, error, changeValue }) => (
                    <TextInput
                      value={value}
                      error={error}
                      onChangeText={(text) => changeValue(setAttractionId1(text))}
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
                      onChangeText={(text) => changeValue(setAttractionId2(text))}
                      placeholder=""
                      label="Название свидания"
                    />
                  )}
                </Field> */}
                {attractionId1 === '1' && (
                  <>
                    <Text> Лучшим выбором будет начать свидание в этих ресторанах: </Text>

                    <RNPickerSelect
                      onValueChange={(value) => setAttractionId1(value)}
                      items={[
                        allTypes[1].name.split(' ').map((rest) => {
                          rest.name;
                        }),
                      ]}
                    />
                    {!rest === !{} && <Text> После ресторана следует вызвать ей такси </Text>}
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
