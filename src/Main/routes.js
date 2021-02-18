import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import List from './pages/List';
import Favorites from './pages/Favorites';
import Captured from './pages/Captured'
import { back } from 'react-native/Libraries/Animated/src/Easing';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            style: {
              backgroundColor: '#EAEDBE'
            },
            activeTintColor: '#6A6E37',
            indicatorStyle: {
              backgroundColor: '#6A6E37',//border bottom of router
              height: 1.8
          }
        }}
    >
      <Tab.Screen name="Todos" component={List} />
      <Tab.Screen name="Favoritos" component={Favorites} />
      <Tab.Screen name="Capturados" component={Captured} />
    </Tab.Navigator>
  );
}