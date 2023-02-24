import React, { Component, useEffect, useState } from 'react';
import {
  Button,
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import CheckboxFormX from 'react-native-checkbox-form';
import Constants from 'expo-constants';
import { Card, TextInput } from 'react-native-paper';
import { Form, Field, Submit } from 'react-swift-form';
import { Formik } from 'formik';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const initialValues = {};

// 1
export default function AddLoveNative({ navigation }) {
  //     useEffect(() => {
  //    axios
  //       dispatch(findUserAction());
  //     }, []);
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [rest, setRest] = useState({} || '');
  console.log(rest);
  const [walk, setWalk] = useState({} || '');
  const [art, setArt] = useState({});

  const [kino, setKino] = useState({});
  const [active, setActive] = useState({});
  const [lepka, setLepka] = useState({});
  const [elbrus, setELBRUS] = useState({});
  const [spa, setSPA] = useState({});

  const submitHandler = () => {
    dispatch(addDate({}));
  };

  const source = {
    html: `
    <script src="//yastatic.net/taxi-widget/ya-taxi-widget.js"></script>
    <div className="ya-taxi-widget" data-use-location="true" data-app="3" data-redirect="1178268795219780156" data-tariff="econom" data-lang="ru" data-size="xs" data-theme="action" data-title="Вызвать такси" data-point-a="" data-point-b="37.588144,55.733842" data-ref="195.133.246.50" data-proxy-url="http://{app}.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;tariffClass={tariff}&amp;lang={lang}"></div>
  <p style='text-align:center;'>
    Hello World!
  </p>`,
  };

  const { width } = useWindowDimensions();

  const kinoProps = [
    {
      label: 'Не пробовала',
      value: '1',
    },
    {
      label: 'Нравится',
      value: '3',
    },
    {
      label: 'Не нравится',
      value: '0',
    },
    {
      label: 'Нейтрально',
      value: '2',
    },
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{}}
        onSubmit={(values, { resetForm }) => {
          dateHandler();
          resetForm({ values: '' });
        }}
      >
        <>
          <ScrollView>
            <View style={styles.container}>
              {/* <Card style={styles.card}> */}
              <Form initialState={initialValues}>
                <Card style={styles.card}>
                  <Field id="title">
                    {({ value, error, changeValue }) => (
                      <TextInput
                        style={{ backgroundColor: 'lightblue' }}
                        value={value}
                        error={error}
                        onChangeText={(text) => changeValue(setName(text))}
                        placeholder=""
                        label="Имя вашего партнера"
                      />
                    )}
                  </Field>
                </Card>
                <Card style={styles.card}>
                  <Text style={styles.text}> Выберите пол: </Text>
                  <RNPickerSelect
                    onValueChange={(value) => setSex(value)}
                    items={[
                      {
                        label: 'Девушка',
                        value: {
                          sex: 'Девушка',
                        },
                      },
                      {
                        label: 'Парень',
                        value: {
                          sex: 'Парень',
                        },
                      },
                    ]}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваш партнер любит кино? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setKino({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Любит посещать рестораны? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setRest({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Партнер любит гулять? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setWalk({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ходит на выставки? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setArt({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Партнер любит активное времяпрепровождение? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setActive({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ему(Ей) нравится лепка из глины? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setLepka({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваш партнер была на дне открытых дверей Эльбруса? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setELBRUS({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваш объект любви посещал когда-то СПА-салоны? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setSPA({ value: value });
                    }}
                  />
                </Card>
                <Button
                  title="Отправить"
                  onPress={() => {
                    Alert.alert('Успешно добавлено');
                    // submitHandler();
                    // axios.post('/api/loves', [{
                    //   name : name,
                    //   sex: sex},
                    //   pref: { 2: rest,
                    // 1: rest, 6: walk, 10: art, 4: active, 3: lepka, 7: elbrus, 11: spa},
                    // ]);
                    navigation.navigate('Свидания');
                  }}
                />
              </Form>
              {/* </Card> */}
            </View>
            {/* <RenderHtml
      contentWidth={width}
      source={source}
    /> */}
          </ScrollView>
        </>
      </Formik>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    padding: 12,
    marginTop: 13,
    shadowOpacity: 1,
    shadowColor: 'lightblue',
  },
  text: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
