import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';

export default function CountryPage({route, navigation}) {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.datas}>
        <Card title="New Confirmed:" data={item.NewConfirmed} />
        <Card title="Total Confirmed:" data={item.TotalConfirmed} />
        <Card title="New Deaths:" data={item.NewDeaths} />
        <Card title="Total Deaths:" data={item.TotalDeaths} />
        <Card title="New Recovered:" data={item.NewRecovered} />
        <Card title="Total Recovered:" data={item.TotalRecovered} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
  },
  datas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '100%',
    paddingVertical: 40,
  },
});
