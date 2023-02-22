import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import { Card, TextInput, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Form, Field, Submit } from 'react-swift-form';
import { useState } from 'react';
import { Formik } from 'formik';
import { getType } from '../redux/typeSlice/typeSlice';

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
  const [attractionId1, setAttractionId1] = useState('');
  const [attractionId2, setAttractionId2] = useState('');
  const [attractionId3, setAttractionId3] = useState('');

  const dispatch = useAppDispatch();
  const allTypes = useAppSelector((store) => store.typeSlice.type);

  useEffect(() => {
    dispatch(getType());
  }, []);

  console.log(allTypes, 'this is allTypes 666');
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{
          id: '',
          glo: '',
          name: '',
          photo: '',
          typeId: '',
        }}
        onSubmit={(values, { resetForm }) => {
          typeHandler(values.name);
          resetForm({ values: '' });
        }}
      >
        <>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Form
              // initialState={initialValues}
              // validator={validators}
              >
                <Field id="love">
                  {({ value, error, changeValue }) => (
                    <TextInput
                      value={value}
                      error={error}
                      // onChangeText={(text) => changeValue(setAttractionId1(text))}
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
                      // onChangeText={(text) => changeValue(setAttractionId2(text))}
                      placeholder=""
                      label="Название свидания"
                    />
                  )}
                </Field>
                {attractionId1 === '1' && (
                  <>
                    <Text> Лучшим выбором будет начать свидание в этих ресторанах: </Text>
                    <RNPickerSelect
                      onValueChange={(value) => setAttractionId1(value)}
                      items={[
                        atraction.map((attr) => {
                          attr.name;
                        }),
                      ]}
                    />
                    {!rest === !{} && <Text> После ресторана следует вызвать ей такси </Text>}
                  </>
                )}

                <Submit onSubmit={''}>
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
