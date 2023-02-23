import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Modules from './Modules';
import axios from 'axios';

export default function OneDateCard({ oneDate }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState('');
  const [coords, setCoords] = useState({});
  const [parksCoords, setParksCoords] = useState({});
  const [park, setPark] = useState('');
  const [kinoName, setKinoName] = useState({});
  const [kinoCoords, setKinoCoords] = useState({});
  const [kinoUrl, setKinoUrl] = useState('');
  const [restUrl, setRestUrl] = useState('');
  const [isSelectedModule, setIsSelectedModule] = useState(false);
  //   const [oneDate, setOneDate] = useState(oneDates);
  //   useEffect(() => {
  //     axios(`/api/dates/${oneDate.id}`).then((res) => setOneDate(res.data));
  //   }, []);
  return (
    <>
      <SafeAreaView style={styles.container1}>
        <View style={styles.container1}>
          <Card
            style={{
              borderRadius: 20,
            }}
          >
            <Image
              style={styles.img2}
              source={{
                uri: oneDate.Attraction.Type.name === 'Ресторан' ? oneDate.Attraction.imgUrl : '',
              }}
            />
            <Text style={styles.paragraph}>{`Ваше свидание: ${oneDate.dateId}`}</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setCoords({
                  lat: oneDate.Attraction.Type.name === 'Ресторан' ? oneDate.Attraction.lat : '',
                  lng: oneDate.Attraction.Type.name === 'Ресторан' ? oneDate.Attraction.lng : '',
                });
                setParksCoords({
                  lat: oneDate.Attraction.Type.name === 'Парк' ? oneDate.Attraction.lat : '',
                  lng: oneDate.Attraction.Type.name === 'Парк' ? oneDate.Attraction.lng : '',
                });
                setKinoCoords({
                  lat: oneDate.Attraction.Type.name === 'Кино' ? oneDate.Attraction.lat : '',
                  lng: oneDate.Attraction.Type.name === 'Кино' ? oneDate.Attraction.lng : '',
                });
                setKinoUrl(oneDate.Attraction.Type.name === 'Кино' ? oneDate.Attraction.url : '');
                setRestUrl(
                  oneDate.Attraction.Type.name === 'Ресторан' ? oneDate.Attraction.url : '',
                );
                setPark(oneDate.Attraction.Type.name === 'Парк' ? oneDate.Attraction.name : '');
                setModalVariant(
                  oneDate.Attraction.Type.name === 'Ресторан' ? oneDate.Attraction.name : '',
                );
                setKinoName({
                  name: oneDate.Attraction.Type.name === 'Кино' ? oneDate.Attraction.name : '',
                });
                setModalVisible(!modalVisible);
                setIsSelectedModule(true);
              }}
            >
              <Text style={styles.paragraph}>Подробнее</Text>
            </Button>
          </Card>
        </View>
      </SafeAreaView>
      {isSelectedModule && (
        <Modules
          el={oneDate}
          key={oneDate.id}
          restUrl={restUrl}
          kinoName={kinoName}
          kinoUrl={kinoUrl}
          kinoCoords={kinoCoords}
          parksCoords={parksCoords}
          coords={coords}
          park={park}
          modalVariant={modalVariant}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
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
