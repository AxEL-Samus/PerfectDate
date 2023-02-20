import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import spaceQuestions from '../data/elbrus';
import westernsQuestions from '../data/julia';
import restQuestions from '../data/rest';

import { RowItem } from '../components/RowItem';

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Не нажимать"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'elbrus',
          questions: spaceQuestions,
          color: '#36b1f0',
        })
      }
    />
    <RowItem
      name="Не нажимать"
      color="#799496"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'julia',
          questions: westernsQuestions,
          color: '#799496',
        })
      }
    />
    <RowItem
      name="Не нажимать"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'rest',
          questions: restQuestions,
          color: '#49475B',
        })
      }
    />
    <RowItem
      name="Карточки"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Карточки', {
          title: 'Restaurant',
          questions: restQuestions,
          color: '#49475B',
        })
      }
    />
  </ScrollView>
);
