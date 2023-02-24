import React from 'react';
import { Modal, View, StyleSheet, Text, Linking, SafeAreaView, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useAppDispatch } from '../redux/hook';
import { deleteCard } from '../redux/datesSlice/datesSlice';

export default function Modules({
  // park,
  // kinoName,
  // parksCoords,
  // coords,
  // modalVariant,
  dateAttractions,
  modalVisible,
  setModalVisible,
  // kinoCoords,
  // kinoUrl,
  // restUrl,
  // // el,
  // paintingCoords,
  // museumCoords,
  // questName,
  // questCoords,
}): JSX.Element {
  // const dispatch = useAppDispatch();
  // console.log('00000000000000000000', dateAttractions);
  // console.log('=======>', dateAttractions.Attractions[0].Type.name);
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
                    latitude: 55.751244,
                    longitude: 37.618423,
                    latitudeDelta: 0.0374,
                    longitudeDelta: 0.0321,
                  }}
                >
                  {dateAttractions.Attractions.map((marker) => (
                    <Marker
                      coordinate={{
                        latitude: marker.lat,
                        longitude: marker.lng,
                      }}
                      pinColor="red"
                      // title={`Тут ${marker.name}`}
                      onPress={() => Linking.openURL(marker.url)}
                    >
                      <Callout>
                        <Button>{`Тут ${marker.name}`}</Button>
                      </Callout>
                    </Marker>
                  ))}
                </MapView>
                <Text style={styles.paragraph}>Ваш план на свидание:</Text>
                {dateAttractions.Attractions.map((date, i) => (
                  <Text style={styles.paragraph}>{`${i + 1}. ${date.Type.name}: ${
                    date.name
                  }`}</Text>
                ))}
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
    paddingB: 20,
  },
  buttonClose: {
    margin: 10,
    backgroundColor: '#CCB188',
  },
});
