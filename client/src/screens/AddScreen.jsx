import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Formik } from 'formik';
import { getType } from '../redux/typeSlice/typeSlice';
import { postAttractionDates } from '../redux/attractionDatesSlice/AttractionDatesSlice';
import { addDate } from '../redux/datesSlice/datesSlice';

export default function AddScreen({ navigation }) {
  const [attr1, setAttr1] = useState({});
  const [attr2, setAttr2] = useState({});
  const [attr3, setAttr3] = useState({});

  console.log('BUGA VUGA!!!', attr1);
  console.log('BUGA VUGA!!!', attr2);
  console.log('BUGA VUGA!!!', attr3);

  const dispatch = useAppDispatch();
  const allTypes = useAppSelector((store) => store.typeSlice.type);

  useEffect(() => {
    dispatch(getType());
  }, []);

  const submitHandler = () => {
    // dispatch(addDate())//dobavit object s typom RootObject
    console.log('in submit handler');
    dispatch(postAttractionDates({ id1: attr1.id, id2: attr2.id, id3: attr3.id }));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Formik
        initialValues={{ attr1: '', attr2: '', attr3: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log('in on submit');
          submitHandler(values.attr1, values.attr2, values.attr3);
          resetForm({ values: '' });
        }}
      >
        {(props) => (
          <>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '70%',
              }}
            >
              <Card style={styles.card}>
                {allTypes
                  .filter((el) => el.name === 'Ресторан')
                  .map((type) => (
                    <>
                      <View>
                        <Text style={{ fontSize: '20', alignSelf: 'center' }}>
                          Выберите {type.name}
                        </Text>
                      </View>
                      <RNPickerSelect
                        onValueChange={(value) => setAttr1(value)}
                        items={type.Attractions.map((el) => ({
                          label: el.name,
                          value: { id: el.id },
                        }))}
                      />
                    </>
                  ))}
              </Card>
              <Card style={styles.card}>
                {allTypes
                  .filter((el) => el.name === 'Кино')
                  .map((type) => (
                    <>
                      <View>
                        <Text style={{ fontSize: '20', alignSelf: 'center' }}>
                          Выберите {type.name}
                        </Text>
                      </View>
                      <RNPickerSelect
                        onValueChange={(value) => setAttr2(value)}
                        items={type.Attractions.map((el) => ({
                          label: el.name,
                          value: { id: el.id },
                        }))}
                      />
                    </>
                  ))}
              </Card>
              <Card style={styles.card}>
                {allTypes
                  .filter((el) => el.name === 'Парк')
                  .map((type) => (
                    <>
                      <View>
                        <Text style={{ fontSize: '20', alignSelf: 'center' }}>
                          Выберите {type.name}
                        </Text>
                      </View>
                      <RNPickerSelect
                        onValueChange={(value) => setAttr3(value)}
                        items={type.Attractions.map((el) => ({
                          label: el.name,
                          value: { id: el.id },
                        }))}
                      />
                    </>
                  ))}
              </Card>
              <Button
                title="Отправить"
                onPress={() => {
                  props.handleSubmit();
                  navigation.navigate('Свидания');
                  Alert.alert('Успешно добавлено');
                }}
                // onPress={handleSubmit}
              />
            </View>
          </>
        )}
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
    width: 370,
    alignSelf: 'center',
  },
  text: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  Button: {
    width: 30,
  },
});
