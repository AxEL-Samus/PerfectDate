import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
// import dates from '../data/Restaurant';
import Modules from './Modules';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setDates } from '../redux/datesSlice/datesSlice';
import OneDateCard from './OneDateCard';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const dates = useAppSelector((store) => store.dates.date);
  const poebota = useAppSelector((store) => store.AttractionDatesSlice)
  useEffect(() => {
    dispatch(setDates());
  }, [poebota]);
  console.log('=-=-=-=-=-=-=-=--=//', dates);
  // const lol = dates.filter((el) => el.dateId === dates);
  // console.log('1234567890-', lol);

  // const dateId1 = [];
  // dates.map((date) => {
  //   if (!dateId1.filter((el) => el.dateId === date.dateId).length) dateId1.push(date);
  // });
  // const dateId = [];
  // const dateId1 = dates.filter((date) =>
  //   date.dateId === date.Date.id ? dateId.push(date.Attraction) : null,
  // );
  // console.log('========/../././././.', dateId);

  return (
    <>
      <ScrollView>
        {dates.map((el) => (
          <OneDateCard key={el.id} dateAttraction={el} idDate={el.id} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
  img2: {
    height: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    paddingTop: '200px',
    height: '100px',
  },
  button: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#CCB188',
  },
});
