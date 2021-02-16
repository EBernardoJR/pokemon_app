import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' color='#000' animated/>
      <Routes />
    </>
)};
