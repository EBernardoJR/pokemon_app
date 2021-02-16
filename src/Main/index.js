import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'; 
import { Container, Header, Title, Name, Modal } from './styles';

import Routes from './routes'

const Main = ({ navigation }) => {

  const [name, setName] = useState('')

  useEffect(()=> {
    AsyncStorage.getItem('name').then(n => {
      if(!n){
        navigation.replace('Login')
      }
      setName(n)
    })

  }, [])


  return (
    

    <Container>
        <Header>
        <FontAwesome name="user-circle" size={24} color="#6A6E37" />
          <Name>{name}</Name>
          <Feather name='chevron-down' color='#6A6E37' size={18}/>
        </Header>
        <Title>Descubra novas criaturas e junte-se a nós! 🐲</Title>
        <Routes />
      </Container>
          
  )
}

export default Main;