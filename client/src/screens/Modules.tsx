import React from 'react';
import { Modal, View, StyleSheet, Text, Linking, SafeAreaView, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useAppDispatch } from '../redux/hook';
import { deleteCard } from '../redux/datesSlice/datesSlice';

export default function Modules({
  park,
  kinoName,
  parksCoords,
  coords,
  modalVariant,
  modalVisible,
  setModalVisible,
  kinoCoords,
  kinoUrl,
  restUrl,
  el,
  paintingCoords,
  museumCoords,
  questName,
  questCoords,
}): JSX.Element {
  console.log(
    '-=-=-=-==--!!!',
    'парк',
    park,
    'кино',
    kinoName,
    'кордыПарк',
    parksCoords,
    'кордыРест',
    coords,
    'пе',
    modalVariant,
    'мп',
    modalVisible,
    'пи',
    setModalVisible,
    'кордыКино',
    kinoCoords,
    'УрлаКино',
    kinoUrl,
    'РестУрла',
    restUrl,
    'впи',
    el,
    'Картины',
    paintingCoords,
    'КордыМуз',
    museumCoords,
    'Квест',
    questName,
  );

  const dispatch = useAppDispatch();
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'rgba(0,0,0, 0.8)',
      }}
    >
      <View
        style={{
          backgroundColor: 'rgba(0,0,0, 0.8)',
        }}
      >
        <ScrollView>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.container1}>
              <Card
                style={{
                  borderRadius: 20,
                }}
              >
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{
                    height: '50%',
                    width: '100%',
                    borderRadius: 15,
                  }}
                  showsUserLocation={true}
                  region={{
                    latitude: coords.lat,
                    longitude: coords.lng,
                    latitudeDelta: 0.0374,
                    longitudeDelta: 0.0321,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: coords.lat,
                      longitude: coords.lng,
                    }}
                    pinColor="red"
                    title={`Тут Ресторан: ${modalVariant}`}
                    onPress={() => Linking.openURL(restUrl)}
                  >
                    <Callout>
                      <Button>{`Тут Ресторан: ${modalVariant}`}</Button>
                    </Callout>
                  </Marker>
                  <Marker
                    coordinate={{
                      latitude: parksCoords.lat,
                      longitude: parksCoords.lng,
                    }}
                    pinColor="black"
                    title="Тут парк"
                  />
                  <Marker
                    coordinate={{
                      latitude: paintingCoords.lat,
                      longitude: paintingCoords.lng,
                    }}
                    pinColor="white"
                    title="Тут выставка"
                  />
                  <Marker
                    coordinate={{
                      latitude: museumCoords.lat,
                      longitude: museumCoords.lng,
                    }}
                    pinColor="white"
                    title="Тут музей"
                  />
                  <Marker
                    coordinate={{
                      latitude: questCoords.lat,
                      longitude: questCoords.lng,
                    }}
                    pinColor="white"
                    title="Тут квест"
                  />
                  <Marker
                    coordinate={{
                      latitude: kinoCoords.lat,
                      longitude: kinoCoords.lng,
                    }}
                    title={`Тут кинотеатр: ${kinoName}`}
                    description={'Cсылка на бронь: '}
                    pinColor="blue"
                    onPress={() => Linking.openURL(kinoUrl)}
                  >
                    <Callout>
                      <Button>{`Тут кинотеатр: ${kinoName}`}</Button>
                    </Callout>
                  </Marker>
                </MapView>
                {modalVariant.name === '' ? null : (
                  <Text
                    style={styles.paragraph}
                  >{`Ресторан: ${modalVariant.name} (красная метка)`}</Text>
                )}
                <Text style={styles.paragraph}>{`Парк: ${park} (черная метка)`}</Text>
                {kinoName.name === '' ? null : (
                  <Text style={styles.paragraph}>{`Кино: ${kinoName.name} (черная метка)`}</Text>
                )}
                <Text style={styles.paragraph}>{`Квест: ${questName.name} (черная метка)`}</Text>
                <Button
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    dispatch(deleteCard(el.id));
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.paragraph}>Удалить</Text>
                </Button>
                <Button
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.paragraph}>Закрыть</Text>
                </Button>
              </Card>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.6)',
    borderRadius: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 18,
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
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    margin: 10,
    backgroundColor: '#CCB188',
  },
});
