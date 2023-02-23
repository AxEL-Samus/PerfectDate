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

const initialValues = {};

// 1
export default function AddLoveNative({ navigation }) {
  //   useEffect(() => {
  //  axios
  //     dispatch(findUserAction());
  //   }, []);
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
                        value={value}
                        error={error}
                        onChangeText={(text) => changeValue(setName(text))}
                        placeholder=""
                        label="Имя девушки"
                      />
                    )}
                  </Field>
                </Card>
                <Card style={styles.card}>
                  <Text> Выберите пол: </Text>
                  <RNPickerSelect
                    onValueChange={(value) => setSex(value)}
                    items={[
                      {
                        label: 'Девушка',
                        value: {
                          sex: 'female',
                        },
                      },
                      {
                        label: 'Парень',
                        value: {
                          sex: 'male',
                        },
                      },
                      {
                        label: 'Небинарная личность',
                        value: {
                          sex: 'they',
                        },
                      },
                    ]}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваша девушка любит кино? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setKino({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Девушка посещает рестораны? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setRest({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Девушка любит гулять? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setWalk({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Девушка любить на выставки? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setArt({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Девушка любит активные времяпрепровождение? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setActive({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваша девушка посещала лепку? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setLepka({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваша девушка была на дне открытых дверей Эльбруса? </Text>
                  <RadioForm
                    radio_props={kinoProps}
                    initial={0}
                    onPress={(value) => {
                      setELBRUS({ value: value });
                    }}
                  />
                </Card>
                <Card style={styles.card}>
                  <Text> Ваша девушка посещала СПА-салон? </Text>
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
                    Alert.alert('Успешно');
                    submitHandler();
                  }}
                />
              </Form>
              {/* </Card> */}
            </View>
          </ScrollView>
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
