import React from 'react';
import { Modal, View, StyleSheet, Text, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function Modules({
  time,
  park,
  parksCoords,
  coords,
  modalVariant,
  modalVisible,
  setModalVisible,
  kinoCoords,
  kinoUrl,
  restUrl,
}): JSX.Element {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,0, 0.8)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}
        >
          <View style={styles.map}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 15,
              }}
              showsUserLocation="true"
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
                fillColor="green"
                strokeWidth={2}
                title={`Тут рестороан: ${modalVariant}`}
                onPress={() => Linking.openURL(restUrl)}
              >
                <Callout>
                  <Button>{`Тут рестороан: ${modalVariant}`}</Button>
                </Callout>
              </Marker>
              <Marker
                coordinate={{
                  latitude: parksCoords.lat,
                  longitude: parksCoords.lng,
                }}
                pinColor="white"
                fillColor="green"
                strokeWidth={2}
                title={`Тут: ${park}`}
              />
              <Marker
                coordinate={{
                  latitude: kinoCoords.lat,
                  longitude: kinoCoords.lng,
                }}
                title={`Тут кинотеатр: ${time.name}`}
                description={`Cсылка на бронь: ${(<Button>Нажми</Button>)}`}
                pinColor="blue"
                // onCalloutPress={() => alert('Cсылка на бронь: ')}
                onPress={() => Linking.openURL(kinoUrl)}
              >
                <Callout>
                  <Button>{`Тут кинотеатр: ${time.name}`}</Button>
                </Callout>
              </Marker>
            </MapView>
          </View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{`Ресторан: ${modalVariant} (красная метка)`}</Text>
            <Text style={styles.modalText}>{`Парк: ${park} (черная метка)`}</Text>
            {time.name && time.time === '' ? null : (
              <>
                <Text style={styles.modalText}>{`Кинотеатр: ${time.name} (синяя метка)`}</Text>
                <Text style={styles.modalText}>{`Время сеанса: ${time.time}`}</Text>
              </>
            )}
          </View>
          <Button
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            Закрыть
          </Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: 220,
    height: 230,
    borderRadius: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 50,
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
