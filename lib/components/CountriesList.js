import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CountriesList({countries}) {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        // <TouchableOpacity onPress={}>
        //   <Image
        //     style={{
        //       width: 20,
        //       height: 20,
        //       marginRight: 15,
        //       tintColor: 'white',
        //     }}
        //     source={require('../../assets/search.png')}
        //   />
        // </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="Search a Country"
          onChangeText={text => setSearch(text)}
        />
      ),
    });
  });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Country', {title: item.Country, item: item})
        }>
        <UsersItem item={item} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={countries.filter(country =>
        country.Country.toLowerCase().includes(search),
      )}
      keyExtractor={item => item.ID + ''}
      renderItem={renderItem}
    />
  );
}
const UsersItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.Country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#424242',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 1,
    marginRight: 5,
    width: 120,
    marginBottom: 10,
    color: 'white',
  },
});
