import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import Favorites from './src/reducer/favoritesReducer'
import Routes from './routes'

export default function App() {
  return (
    <Provider store={createStore(combineReducers({
      Favorites
    }))}>
      <StatusBar barStyle='dark-content' color='#000' animated/>
      <Routes />
    </Provider>
)};
