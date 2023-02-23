import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Formik } from 'formik';
import { getType } from '../redux/typeSlice/typeSlice';
import { addAttractionAction } from '../redux/attractionSlice/attractionSlice';

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
    dispatch(addAttractionAction({ id1: attr1, id2: attr2, id3: attr3 }));
  };

  return (
    <Formik
      initialValues={{ attr1: '', attr2: '', attr3: '' }}
      onSubmit={(values, { resetForm }) => {
        submitHandler(values.attr1, values.attr2, values.attr3);
        resetForm({ values: '' });
      }}
    >
      {({ handleSubmit }) => (
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
                      onValueChange={(value) => setAttr1(value)}
                      items={type.Attractions.map((el) => ({
                        label: el.name,
                        value: { id: el.id },
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
                      onValueChange={(value) => setAttr2(value)}
                      items={type.Attractions.map((el) => ({
                        label: el.name,
                        value: { id: el.id },
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
                      onValueChange={(value) => setAttr3(value)}
                      items={type.Attractions.map((el) => ({
                        label: el.name,
                        value: { id: el.id },
                      }))}
                    />
                  </>
                ))}
            </Card>
          </View>
          <Text style={{ fontSize: 30 }} onPress={handleSubmit}>
            Далее
          </Text>
        </>
      )}
    </Formik>
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
