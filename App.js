import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './lib/pages/HomePage';
import GlobalPage from './lib/pages/GlobalPage';
import ListPage from './lib/pages/ListPage';
import CountryPage from './lib/pages/CountryPage';
import {Button, TouchableOpacity, Image} from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#00579b'},
            title: 'ECovid-19',
            headerTintColor: 'white',
          }}
          name="Global"
          component={GlobalPage}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#00579b'},
            title: 'Countries',
            headerTintColor: 'white',
            // headerRight: () => (
            //   <TouchableOpacity>
            //     <Image
            //       style={{
            //         width: 20,
            //         height: 20,
            //         marginRight: 15,
            //         tintColor: 'white',
            //       }}
            //       source={require('./assets/search.png')}
            //     />
            //   </TouchableOpacity>
            // ),
          }}
          name="List"
          component={ListPage}
        />
        <Stack.Screen
          options={({route}) => ({
            headerStyle: {backgroundColor: '#00579b'},
            title: route.params.title,
            headerTintColor: 'white',
          })}
          name="Country"
          component={CountryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
