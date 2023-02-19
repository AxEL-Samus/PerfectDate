import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='Идеальное свидание' />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            url: 'https://www.nicepng.com/png/detail/116-1161011_creative-heart-logo-png-svg-love-logo-png.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('QuizIndex')}
        style={styles.button}>
        <Text style={styles.buttonText}>Свидание {"->"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
