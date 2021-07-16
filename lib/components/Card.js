import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Card({title, data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    alignItems: 'center',
    paddingVertical: 60,
    borderColor: 'white',
    width: '45%',
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 25,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  data: {
    color: 'white',
    fontSize: 19,
  },
});
