import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222222" />
      <View style={styles.header}>
        <Image style={styles.icon} source={require('../../assets/icon.png')} />
        <Text style={styles.title}>ECovid-19</Text>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.wtext}>Welcome!</Text>
        <Text style={styles.atext}>
          This application is for can find information about pandemy of
          coronavirus, this data is update day to day.
        </Text>
      </View>
      <View style={styles.medium}>
        <Text style={styles.atext}>Do you want see the data?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Global')}>
          <View style={styles.button}>
            <Text style={styles.dtext}>On press here!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.foot}>
        <Text style={styles.dtext}>Created by: PitMac</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
  },
  header: {
    justifyContent: 'space-around',
    height: '40%',
    alignItems: 'center',
  },
  icon: {
    marginTop: 30,
    width: 100,
    height: 100,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  welcome: {
    backgroundColor: '#424242',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
  },
  wtext: {
    color: 'white',
    fontSize: 20,
  },
  atext: {
    color: '#c2c2c2',
    fontSize: 15,
  },
  medium: {
    justifyContent: 'center',
    height: '40%',
    alignItems: 'center',
  },
  dtext: {
    color: 'white',
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#424242',
    width: 200,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  foot: {
    alignItems: 'center',
  },
});
