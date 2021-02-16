import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login'
import Main from './src/Main'
import Details from './src/Details'

const Stack = createStackNavigator();

export default function Routes() {
    
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}