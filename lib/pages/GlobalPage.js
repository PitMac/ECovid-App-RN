import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Card from '../components/Card';
import {getDataGeneral} from '../components/Api';

export default function GlobalPage({navigation}) {
  const [general, setGeneral] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await getDataGeneral();
    setGeneral(data.Global);
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View
        style={{flex: 1, backgroundColor: '#2e2e2e', justifyContent: 'center'}}>
        <ActivityIndicator color="#00579b" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#004274" />
      <View style={styles.datas}>
        <Card title="New Confirmed:" data={general.NewConfirmed} />
        <Card title="Total Confirmed:" data={general.TotalConfirmed} />
        <Card title="New Deaths:" data={general.NewDeaths} />
        <Card title="Total Deaths:" data={general.TotalDeaths} />
        <Card title="New Recovered:" data={general.NewRecovered} />
        <Card title="Total Recovered:" data={general.TotalRecovered} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <View style={styles.button}>
          <Text style={styles.textbutton}>View Countrys List</Text>
        </View>
      </TouchableOpacity>
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
  },
  button: {
    marginTop: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  textbutton: {
    color: 'white',
    fontWeight: '900',
  },
});
