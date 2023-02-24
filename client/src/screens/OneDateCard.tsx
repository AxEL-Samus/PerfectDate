import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Modules from './Modules';
import axios from 'axios';

export default function OneDateCard({ dateAttraction, idDate }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateAttractions, setDateAttractions] = useState(dateAttraction);
  //   const [modalVariant, setModalVariant] = useState({});
  //   const [coords, setCoords] = useState({});
  //   const [parksCoords, setParksCoords] = useState({});
  //   const [park, setPark] = useState('');
  //   const [kinoName, setKinoName] = useState({});
  //   const [masterClassCoords, setMasterClassCoords] = useState({});
  //   const [kartingCoords, setKartingCoords] = useState({});
  //   const [bowlingCoords, setBowlingCoords] = useState({});
  //   const [questCoords, setQuestCoords] = useState({});
  //   const [teaCoords, setTeaCoords] = useState({});
  //   const [horseCoords, setHorseCoords] = useState({});
  //   const [konkiCoords, setKonkiCoords] = useState({});
  //   const [excursionCoords, setExcursionCoords] = useState({});
  //   const [museumCoords, setMuseumCoords] = useState({});
  //   const [paintingCoords, setPaintingCoords] = useState({});
  //   const [kinoCoords, setKinoCoords] = useState({});
  //   const [questName, setQuestName] = useState({});
  //   const [kinoUrl, setKinoUrl] = useState('');
  //   const [restUrl, setRestUrl] = useState('');
  const [isSelectedModule, setIsSelectedModule] = useState(false);
  //   const [oneDate, setOneDate] = useState(oneDates);
  //   useEffect(() => {
  //     axios(`/api/dates/${oneDate.id}`).then((res) => setOneDate(res.data));
  //   }, []);

  //   const callbacks = [
  //     //useState
  //     {
  //       type: 'Музей',
  //       cb: () =>
  //         setMuseumCoords({
  //           lat: oneDate.Type.name === 'Музей' ? oneDate.lat : '',
  //           lng: oneDate.Type.name === 'Музей' ? oneDate.lng : '',
  //         }),
  //     },
  //     {
  //       type: 'Ресторан',
  //       cb: () =>
  //         setCoords({
  //           lat: oneDate.Type.name === 'Ресторан' ? oneDate.lat : '',
  //           lng: oneDate.Type.name === 'Ресторан' ? oneDate.lng : '',
  //         }),
  //     },
  //     {
  //       type: 'Квест',
  //       cb: () =>
  //         setQuestName({
  //           name: oneDate.Type.name === 'Квест' ? oneDate.name : '',
  //         }),
  //     },
  //   ];
  //   const [callbackA, setCallbackA] = useState(callbacks)
  //   const handleAttractions = () => {
  //     dateAttractions.forEach((attr) => {
  //       const targetObj = callbacks.find((obj) => obj.type === attr.Type.name);
  //       targetObj?.cb();
  //     });
  //   };

  //   const handlePush = () => {
  //     console.log('89371=-=-=-135', dateAttractions);
  //     dateAttractions.forEach((el) => {
  //       setMuseumCoords({
  //         lat: el.Type.name === 'Музей' ? el.lat : '',
  //         lng: el.Type.name === 'Музей' ? el.lng : '',
  //       });
  //       setCoords({
  //         lat: el.Type.name === 'Ресторан' ? el.lat : '',
  //         lng: el.Type.name === 'Ресторан' ? el.lng : '',
  //       });
  //       console.log(coords);

  //       setParksCoords({
  //         lat: el.Type.name === 'Парк' ? el.lat : '',
  //         lng: el.Type.name === 'Парк' ? el.lng : '',
  //       });
  //       setKinoCoords({
  //         lat: el.Type.name === 'Кино' ? el.lat : '',
  //         lng: el.Type.name === 'Кино' ? el.lng : '',
  //       });
  //       setQuestCoords({
  //         lat: el.Type.name === 'Квест' ? el.lat : '',
  //         lng: el.Type.name === 'Квест' ? el.lng : '',
  //       });
  //       setQuestName({
  //         name: el.Type.name === 'Квест' ? el.name : '',
  //       });
  //       setKinoUrl(el.Type.name === 'Кино' ? el.url : '');
  //       setRestUrl(el.Type.name === 'Ресторан' ? el.url : '');
  //       setPark(el.Type.name === 'Парк' ? el.name : '');
  //       setPaintingCoords({
  //         lat: el.Type.name === 'Картинная выставка' ? el.lat : '',
  //         lng: el.Type.name === 'Картинная выставка' ? el.lng : '',
  //       });
  //       setModalVariant({
  //         name: el.Type.name === 'Ресторан' ? el.name : '',
  //       });
  //       setKinoName({
  //         name: el.Type.name === 'Кино' ? el.name : '',
  //       });
  //     });
  //   };
  //   console.log(handlePush());

  return (
    <>
      <SafeAreaView style={styles.container1}>
        <View style={styles.container1}>
          <Card
            style={{
              borderRadius: 20,
              shadowOpacity: 1,
              shadowColor: 'lightblue',
            }}
          >
            {dateAttractions.Attractions.map((el1) =>
              el1.Type.name === 'Ресторан' ? (
                <Image
                  style={styles.img2}
                  source={{
                    uri: el1.imgUrl,
                  }}
                />
              ) : null,
            )}
            <Text style={styles.paragraph}>{`Ваше свидание: ${dateAttractions.id}`}</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.paragraph}>Подробнее</Text>
            </Button>
          </Card>
        </View>
      </SafeAreaView>
      {modalVisible && (
        <Modules
          //   questCoords={questCoords}
          //   questName={questName}
          //   museumCoords={museumCoords}
          //   paintingCoords={paintingCoords}
          dateAttractions={dateAttractions}
          //   restUrl={restUrl}
          //   kinoName={kinoName}
          //   kinoUrl={kinoUrl}
          //   kinoCoords={kinoCoords}
          //   parksCoords={parksCoords}
          //   coords={coords}
          //   park={park}
          //   modalVariant={modalVariant}
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
