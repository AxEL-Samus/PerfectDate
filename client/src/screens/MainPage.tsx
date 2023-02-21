import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
// import dates from '../data/Restaurant';
import Modules from './Modules';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setDates } from '../redux/datesSlice/datesSlice';

export default function MainPage(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState('');
  const [coords, setCoords] = useState({});
  const [parksCoords, setParksCoords] = useState({});
  const [park, setPark] = useState('');
  const [time, setTime] = useState({});
  const [kinoCoords, setKinoCoords] = useState({});
  const [kinoUrl, setKinoUrl] = useState('');
  const [restUrl, setRestUrl] = useState('');
  const [isSelectedModule, setIsSelectedModule] = useState(false);
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
                      uri: el.restImg,
                    }}
                  />
                  <Text style={styles.paragraph}>{`Ваше свидание: ${el.title}`}</Text>
                  <Button
                    style={[styles.button, styles.buttonClose]}
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
                      setKinoUrl(el.kinoUrl);
                      setRestUrl(el.restUrl);
                      setTime({ name: el.kinoTitle, time: el.kinoDate, movie: el.movieTitle });
                      setPark(el.parkTitle);
                      setModalVariant(el.restTitle);
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
                el={el}
                key={el.id}
                restUrl={restUrl}
                kinoUrl={kinoUrl}
                kinoCoords={kinoCoords}
                time={time}
                parksCoords={parksCoords}
                coords={coords}
                park={park}
                modalVariant={modalVariant}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
              />
            )}
          </>
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
