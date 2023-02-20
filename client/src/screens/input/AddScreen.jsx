import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';
import {Card, TextInput, Button} from 'react-native-paper';
// import TextInput from './TextInput';

import {Form, Field, Submit} from 'react-swift-form';
import * as yup from 'yup';

const initialValues = {
  rest: '',
  email: '',
  age: 18,
};

const validators = {
  rest: yup.string().required("rest is required").min(3, "rest must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email"),
  age: yup.number().min(18, 'You must be at least 18 years old').max(80, 'You must be younger than 80 years old'),
}

export default function AddScreen({ navigation }) {
  const onFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }
  const [rest, setRest] = React.useState('');
  return (
    <View style={styles.container}>
     <Card style={styles.card}>
        <Form initialState={initialValues} validator={validators}>
          <Field id="rest">
            {({value, error, changeValue}) => (
              <TextInput value={value} error={error} onChangeText={changeValue} placeholder="rest" label="Ресторан" />
            )}
          </Field>

          <Field id="email">
            {({value, error, changeValue}) => (
              <TextInput value={value} error={error} onChangeText={changeValue} placeholder="кинотеатр" label="Кино" />
            )}
          </Field>

          <Field id="age">
            {({value, error, changeValue}) => (
              <TextInput
                value={value}
                error={error}
                onChangeText={(text) => changeValue(parseInt(text) || 0)}
                placeholder="Парк"
                label="Парк"
                keyboardType="number-pad"
              />
            )}
          </Field>

          <Submit onSubmit={onFormSubmit}>
            {({submit}) => (
              <Button title="Submit" onPress={submit} />
            )}
          </Submit>
        </Form>
      </Card>
      <View>
        <TextInput 
          placeholder="Выберите время" />
        <TextInput
          secureTextEntry={true}
          placeholder="Место"
        />
        <Picker
          selectedValue='123'
          onValueChange={currentRest => setRest(currentRest)}>
          <Picker.Item label="Якитория" value="title_якитория" />
          <Picker.Item label="Dr. Живаго" value="title_живаго" />
          <Picker.Item label="White Rabbit" value="title_rabbit" />
        </Picker>
        <Text>
          Selected: '123'
        </Text>
      </View>
    </View>
    
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
  }
});
