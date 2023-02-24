import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CheckboxFormX from 'react-native-checkbox-form';
import Constants from 'expo-constants';
import { Button, Card, TextInput } from 'react-native-paper';
import { Form, Field, Submit } from 'react-swift-form';
import { Formik } from 'formik';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const kinoData = [
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

const activeData = [
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

const restData = [
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

const walkData = [
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

const artData = [
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

const onFormSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const submitHandler = () => {
  dispatch(addDate({ kinoData, restData, walkData, artData }));
};

const radio_props = [
  { label: 'param1', value: 0 },
  { label: 'param2', value: 1 },
];

export default class addLove extends Component {
  _onSelect = (item) => {
    console.log(item);
  };

  render() {
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
            <View style={styles.container}>
              <Card style={styles.card}>
                <Text> Ваша партнер любит кино? </Text>
                <View style={{ marginVertical: 10, backgroundColor: '#E7E7E7' }}>
                  <CheckboxFormX
                    style={{ width: 350 - 30 }}
                    dataSource={kinoData}
                    itemShowKey="label"
                    itemCheckedKey="kino"
                    iconSize={16}
                    formHorizontal={true}
                    labelHorizontal={false}
                    onChecked={(item) => this._onSelect(item)}
                  />
                </View>
                <Text> Партнер посещает рестораны? </Text>
                <View style={{ marginVertical: 10, backgroundColor: '#E7E7E7' }}>
                  <CheckboxFormX
                    style={{ width: 350 - 30 }}
                    dataSource={restData}
                    itemShowKey="label"
                    itemCheckedKey="rest"
                    iconSize={16}
                    formHorizontal={true}
                    labelHorizontal={false}
                    onChecked={(item) => this._onSelect(item)}
                  />
                </View>
                <Text> Партнер любит гулять? </Text>
                <View style={{ marginVertical: 10, backgroundColor: '#E7E7E7' }}>
                  <CheckboxFormX
                    style={{ width: 350 - 30 }}
                    dataSource={walkData}
                    itemShowKey="label"
                    itemCheckedKey="walk"
                    iconSize={16}
                    formHorizontal={true}
                    labelHorizontal={false}
                    onChecked={(item) => this._onSelect(item)}
                  />
                </View>
                <Text> Партнер любит ходить на выставки? </Text>
                <View style={{ marginVertical: 10, backgroundColor: '#E7E7E7' }}>
                  <CheckboxFormX
                    style={{ width: 350 - 30 }}
                    dataSource={artData}
                    itemShowKey="label"
                    itemCheckedKey="art"
                    iconSize={16}
                    formHorizontal={true}
                    labelHorizontal={false}
                    onChecked={(item) => this._onSelect(item)}
                  />
                </View>
                <Text> Партнер любит активное времяпрепровождение? </Text>
                <View style={{ marginVertical: 10, backgroundColor: '#E7E7E7' }}>
                  <CheckboxFormX
                    style={{ width: 350 - 30 }}
                    dataSource={activeData}
                    itemShowKey="label"
                    itemCheckedKey="active"
                    iconSize={16}
                    formHorizontal={true}
                    labelHorizontal={false}
                    onChecked={(item) => this._onSelect(item)}
                  />
                </View>
                <View>
                  <>
                    <RadioForm
                      radio_props={radio_props}
                      initial={0}
                      onPress={(value) => {
                        this.setState({ value: value });
                      }}
                    />
                  </>
                </View>
              </Card>
            </View>
          </>
        </Formik>
      </TouchableWithoutFeedback>
    );
  }
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
