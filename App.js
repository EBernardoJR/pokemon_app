import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import Favorites from './src/reducer/favoritesReducer'
import Captureds from './src/reducer/capturedsReducer'
import Routes from './routes'

export default function App() {
  return (
    <Provider store={createStore(combineReducers({
      Favorites,
      Captureds
    }))}>
      <StatusBar barStyle='dark-content' color='#000' animated backgroundColor='#EAEDBE'/>
      <Routes />
    </Provider>
)};
