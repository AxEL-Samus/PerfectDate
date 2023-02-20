import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
// import dates from '../data/Restaurant';
import Modules from './Modules';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setDates } from '../redux/datesSlice/datesSlice';
import type { DatesState } from '../redux/datesSlice/datesType';

export default function MainPage(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState('');
  const [coords, setCoords] = useState({});
  const [parksCoords, setParksCoords] = useState({});
  const [park, setPark] = useState('');
  const [time, setTime] = useState({});
  const [kinoCoords, setKinoCoords] = useState({});
  const dispatch = useAppDispatch();
  const dates = useAppSelector((store) => store.dates.date);
  useEffect(() => {
    dispatch(setDates());
  }, []);
  console.log('=-=-=-=-=-=-=-=--=', dates);
  return (
    <>
      <ScrollView>
        {dates.map((el) => (
          <>
            <Card style={styles.cardMain}>
              <View style={styles.container}>
                <View style={styles.card_template}>
                  <View style={styles.imgAndMap}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: el.parkImg,
                      }}
                    />
                    {el.kinoImg === '' ? (
                      <View style={styles.imgAndMap}>
                        <Image style={styles.img2} source={{ uri: el.restImg }} />
                      </View>
                    ) : (
                      <View style={styles.imgAndMap}>
                        <Image style={styles.img2} source={{ uri: el.kinoImg }} />
                      </View>
                    )}
                  </View>
                  <View style={styles.text_container}>
                    <Text style={styles.card_title}>{`Свидание - ${el.title}`}</Text>
                  </View>
                </View>
                <Button
                  style={styles.buttonMore}
                  onPress={() => {
                    setCoords({
                      lat: el.restLat,
                      lng: el.restLng,
                    });
                    setParksCoords({
                      lat: el.parkLat,
                      lng: el.parkLng,
                    });
                    setKinoCoords({
                      lat: el.kinoLat,
                      lng: el.kinoLng,
                    });
                    setTime({ name: el.kinoTitle, time: el.kinoDate });
                    setPark(el.parkTitle);
                    setModalVariant(el.restTitle);
                    setModalVisible(!modalVisible);
                  }}
                >
                  Подробнее
                </Button>
              </View>
            </Card>
            <Modules
              kinoCoords={kinoCoords}
              time={time}
              parksCoords={parksCoords}
              coords={coords}
              park={park}
              modalVariant={modalVariant}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          </>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  selector: {
    border: '10px solid black',
  },
  container: {
    flex: 3,
    border: '10px solid black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    paddingTop: 0,
    margin: 15,
  },
  buttonMore: {
    padding: 1,
  },
  card_template: {
    width: 400,
    height: 250,
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
  },
  card_image: {
    width: 400,
    height: 250,
    borderRadius: 15,
  },
  text_container: {
    position: 'absolute',
    width: 400,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.8)',
    borderRadius: 10,
  },
  card_title: {
    color: 'white',
  },
  cardMain: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
  },
  imgAndMap: {
    flexDirection: 'row',
  },
  img: {
    width: 200,
    height: 220,
    borderRadius: 10,
  },
  img2: {
    width: 200,
    height: 220,
    borderRadius: 10,
  },
  header: {
    paddingTop: '200px',
    height: '100px',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
