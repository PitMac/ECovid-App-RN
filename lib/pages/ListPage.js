import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {getDataCountries} from '../components/Api';
import CountriesList from '../components/CountriesList';

export default function ListPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await getDataCountries();
    setCountries(data.Countries);
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
    <View style={{flex: 1, backgroundColor: '#2e2e2e'}}>
      <CountriesList countries={countries} key={countries.ID} />
    </View>
  );
}
