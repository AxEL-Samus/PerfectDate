import React, { useState } from 'react';
import { Button, Card } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import dates from '../data/Restaurant';
import Modules from './Modules';

export default function MainPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState('');
  const [coords, setCoords] = useState({});
  const [parksCoords, setParksCoords] = useState({});
  const [park, setPark] = useState('');
  const [time, setTime] = useState('');
  
  return (
    <>
      <ScrollView>
        {dates.restaurants.map((el, i) => (
          <>
            <Card style={styles.cardMain}>
              <View style={styles.container}>
                <View style={styles.card_template}>
                  <View style={styles.imgAndMap}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: el.img,
                      }}
                    />
                    <View style={styles.imgAndMap}>
                      <Image style={styles.img2} source={{ uri: dates.parks[i].img }} />
                    </View>
                  </View>
                  <View style={styles.text_container}>
                    <Text style={styles.card_title}>{`Ваше свидание №: ${el.id}`}</Text>
                  </View>
                </View>
                <Button
                  style={styles.buttonMore}
                  onPress={() => {
                    setCoords({
                      lat: el.lat,
                      lng: el.lng,
                      latDelta: el.latDelta,
                      lngDelta: el.lngDelta,
                    });
                    setParksCoords({
                      lat: dates.parks[i].lat,
                      lng: dates.parks[i].lng,
                      latDelta: dates.parks[i].latDelta,
                      lngDelta: dates.parks[i].lngDelta,
                    });
                    setTime(dates.more[i].time);
                    setPark(dates.parks[i].text);
                    setModalVariant(el.text);
                    setModalVisible(!modalVisible);
                  }}
                >
                  Подробнее
                </Button>
              </View>
            </Card>
            <Modules
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
