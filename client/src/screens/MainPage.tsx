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
  useEffect(() => {
    dispatch(setDates());
  }, []);
  console.log('=-=-=-=-=-=-=-=--=', dates);
  const dateId1 = [];
  dates.map((date) => {
    if (!dateId1.filter((el) => el.dateId === date.dateId).length) dateId1.push(date);
  });
  return (
    <>
      <ScrollView>
        {dateId1.map((el) => (
          <OneDateCard key={el.id} oneDate={el} />
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
