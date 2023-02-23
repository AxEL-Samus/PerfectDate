import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Modules from './Modules';
import axios from 'axios';

export default function OneDateCard({ oneDate, idDate }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState({});
  const [coords, setCoords] = useState({});
  const [parksCoords, setParksCoords] = useState({});
  const [park, setPark] = useState('');
  const [kinoName, setKinoName] = useState({});
  const [masterClassCoords, setMasterClassCoords] = useState({});
  const [kartingCoords, setKartingCoords] = useState({});
  const [bowlingCoords, setBowlingCoords] = useState({});
  const [questCoords, setQuestCoords] = useState({});
  const [teaCoords, setTeaCoords] = useState({});
  const [horseCoords, setHorseCoords] = useState({});
  const [konkiCoords, setKonkiCoords] = useState({});
  const [excursionCoords, setExcursionCoords] = useState({});
  const [museumCoords, setMuseumCoords] = useState({});
  const [paintingCoords, setPaintingCoords] = useState({});
  const [kinoCoords, setKinoCoords] = useState({});
  const [questName, setQuestName] = useState({});
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
                uri: oneDate === 'Ресторан' || 'Кино' ? oneDate.imgUrl : '',
              }}
            />
            <Text style={styles.paragraph}>{`Ваше свидание: ${idDate}`}</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setMuseumCoords({
                  lat: oneDate.Type.name === 'Музей' ? oneDate.lat : '',
                  lng: oneDate.Type.name === 'Музей' ? oneDate.lng : '',
                });
                setCoords({
                  lat: oneDate.Type.name === 'Ресторан' ? oneDate.lat : '',
                  lng: oneDate.Type.name === 'Ресторан' ? oneDate.lng : '',
                });
                setParksCoords({
                  lat: oneDate.Type.name === 'Парк' ? oneDate.lat : '',
                  lng: oneDate.Type.name === 'Парк' ? oneDate.lng : '',
                });
                setKinoCoords({
                  lat: oneDate.Type.name === 'Кино' ? oneDate.lat : '',
                  lng: oneDate.Type.name === 'Кино' ? oneDate.lng : '',
                });
                setQuestCoords({
                  lat: oneDate.Type.name === 'Квест' ? oneDate.lat : '',
                  lng: oneDate.Type.name === 'Квест' ? oneDate.lng : '',
                });
                setQuestName({
                  name: oneDate.Type.name === 'Квест' ? oneDate.name : '',
                });
                setKinoUrl(oneDate.Type.name === 'Кино' ? oneDate.url : '');
                setRestUrl(oneDate.Type.name === 'Ресторан' ? oneDate.url : '');
                setPark(oneDate.Type.name === 'Парк' ? oneDate.name : '');
                setPaintingCoords({
                  lat: oneDate.Type.name === 'Картинная выставка' ? oneDate.lat : '',
                  lng: oneDate.Type.name === 'Картинная выставка' ? oneDate.lng : '',
                });
                setModalVariant({
                  name: oneDate.Type.name === 'Ресторан' ? oneDate.name : '',
                });
                setKinoName({
                  name: oneDate.Type.name === 'Кино' ? oneDate.name : '',
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
          questCoords={questCoords}
          questName={questName}
          museumCoords={museumCoords}
          paintingCoords={paintingCoords}
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
