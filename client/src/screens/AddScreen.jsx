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

const yakitoria = 'https://yakitoriya.ru/?ysclid=lee6masdf7641902756'
const jivago = 'https://drzhivago.ru/?ysclid=lee6q75lcn286509966'

// 1
export default function AddScreen({ navigation }) {
  const onFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const user = useAppSelector((store) => store.userFirestorm);
  useEffect(() => {
    dispatch(findUserAction());
  }, []);
  const dispatch = useAppDispatch();

  const [selectLove, setLove] = useState('');
  const [title, setTitle] = useState('');
  const [rest, setRest] = useState({} || '');
  const [park, setPark] = useState({} || '');

  const [kino, setKino] = useState('');
  const [movie, setMovie] = useState('');
  const [data, setData] = useState('');

  const submitHandler = () => {
    dispatch(addDate({ userId: Math.floor(Math.random() * 4), loveId: Math.floor(Math.random() * 4), restLat: rest.restLat, restLng: rest.restLng, restTitle: rest.restTitle, restUrl: rest.restUrl, title, parkLat: park.parkLat, parkLng: park.parkLng, parkTitle: park.parkTitle, restImg: rest.restImg, kinoUrl: kino, kinoLat: kino, kinoLng: kino, kinoUrl: kino, kinoImg: kino, date: data, restUrl: rest.restUrl, kinoTitle: '', parkImg: park.parkImg, taxi: '', kinoDate: '', movieTitle: ''}));
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
                <Field id="date">
                  {({ value, error, changeValue }) => (
                    <TextInput
                      value={value}
                      error={error}
                      onChangeText={(text) => changeValue(setData(text))}
                      placeholder=""
                      label="Дата"
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
                            restUrl: yakitoria,
                            restImg: "https://avatars.mds.yandex.net/get-altay/402558/2a0000015f48577e0a37f2e2c1d710fb306a/XXL"
                          },
                        },
                        {
                          label: 'Dr. Живаго',
                          value: {
                            restLat: '55.756778',
                            restLng: '37.614279',
                            restTitle: 'Dr. Живаго',
                            restUrl: jivago,
                            restImg: "https://static.tildacdn.com/tild3565-3563-4461-b766-616235613062/Zhivago_interior8.jpg"
                          },
                        },
                        {
                          label: 'White Rabbit',
                          value: {
                            restLat: '55.7470578',
                            restLng: '37.5777096',
                            restTitle: 'White Rabbit',
                            restUrl: 'https://whiterabbitmoscow.ru/ru/',
                            restImg: 'https://kudamoscow.ru/uploads/11d71eb745bd268c0dd57845b59d803c.jpg'
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
                            parkImg: 'https://ru.moscovery.com/wp-content/uploads/2016/04/hrader.jpg'
                          },
                        },
                        {
                          label: 'Измайловский',
                          value: {
                            parkLat: '55.770864',
                            parkLng: '37.755265',
                            parkTitle: 'Измайловский',
                            parkImg: "http://rasfokus.ru/images/photos/medium/579889423f4f5e3c92a04781b885ba43.jpg"
                          },
                        },
                        {
                          label: 'Коломенский',
                          value: {
                            parkLat: '55.662907',
                            parkLng: '37.665202',
                            parkTitle: 'Коломенский',
                            parkImg: "https://kartinkin.net/pics/uploads/posts/2022-08/1659560124_51-kartinkin-net-p-park-kolomenskoe-osenyu-priroda-krasivo-fo-53.jpg"
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
                                restImg: "https://image.eatout.ru/imager/0000/0000/0000/0044/0453/1100x/440453.jpeg",
                                restUrl: "https://tanukifamily.ru/ersh/"
                              },
                            },
                            {
                              label: 'ДжонДжоли',
                              value: {
                                restLat: '55.810727',
                                restLng: '37.638079',
                                restTitle: 'ДжонДжоли',
                                restImg: "https://gcdn.tomesto.ru/img/place/000/018/288/restoran-dzhondzholi-na-pyatnitskoy-ulitse_b912f_full-230234.jpg",
                                restUrl: "https://ch1ef.ru/?ysclid=lee78icpq6168197480/"
                              },
                            },
                            {
                              label: 'Тануки',
                              value: {
                                restLat: '55.795468',
                                restLng: '37.705499',
                                restTitle: 'Тануки',
                                restImg: "https://yandex-images.clstorage.net/ntA4t9248/2222fb0w6qh5/c5J3PtCzqkZz2Vek4XgI9W-Fle6ahX-Vq4DB-UxoCGFQsQD2ryMmQvGo1f2aW-1UXNcOHqtBdjBzbor90Z7JTTMjtrvks95T4tgDAbQpWQH7ZvYsCPJtZ-jnw3o_vqrjcGEBghpnx4al_hN9bWq5EbmAe7g-FCSQwsmvjPA5iAqGR6LdoSLodXHoUBcj21zkP4VnHCgzb8e6BNIJzQ9JcWEiM9IKdyM0hrzDG79bG2D58rq7rzRG0uOZ_H2DekvYFoSRL9LTWJSSWTHWExt8t8_2NM25g8_XqWVwiA2vmyMxMIAjOLfQB5WuglldOFgCGPA6CT5VBtFzyQ_sE2i5ycTE8PyTcQpVMsgAd1J7nyWetxVNi2H993vHAUhuPZiS8aByEyk0MvYnrKBIbAtqwWnDO6jvpCRgEGis78I52ij2xrMf0MEL1wOKQ_YDe31EXdcWrlmR_5TphPCJr747YaPR0yCZpdH2Jn_SGb4ayuObUqhJfWbHEkMrXn7COvm7JrSjrLORmqXAG0N0Ejo8Jm4FtM7ag_4XK-bRuGx8KiKwwbLAG5fhBqWd0fs8-dgCGXDImR1kp2Cga2zO8Pt6aSZk0a3gkThGMmohFLH7zYa_R-Sf-VFMd7qFUSvNTIox0SMy8csE4gTHjLHrr6mog5rBmLiMFYai4SuO7wPYezhWBlJcAoHrFgOpAAUDa60H7rQ3jgoSPmdL5rAZzD46kzOhcgHIpeJ3JGyRCs4L6NIKoOmr_2QUspBY_66DyvuZ5sej39FTOeawujAlonoPRh3UVQ-oIv53qCYSy6w92pEBUwEjKTRx5-WvMhtOWGpDGfFLeu1mlhLTy75N0zvIGmZkoLwxEyhF8ttAJ6HZbLXP9acOm8I_RRvHsSluP-jxoGHDQKm34sXn_XHIXdjaoEjAeFq9JqSAYGs8DXMpmvk3F9NfUVHYFlLaodUh2G9GPJQFDCuDPmaaZMAYY",
                                restUrl: "https://tanukifamily.ru/"
                              },
                            },
                          ]}
                        />
                        {!rest.restTitle !== !'' && <Text> Ваше свидание укомплектовано </Text>}
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
