import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { clearCaps} from './actions/capsActions'
import { clearFavs } from './actions/favsActions'
import { AsyncStorage, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'; 
import { Container, Header, Title, Name, About, Logout, AboutView, LogView, ModalView, Close, ClosePress } from './styles';

import Routes from './routes'

const Main = ({ navigation, clearCaps, clearFavs }) => {

  const [name, setName] = useState('')
  const [modalVisible, setModalVisible] = useState('')

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
        <Header onPress={() => {
          setModalVisible(true)
        }}>
        <FontAwesome name="user-circle" size={24} color="#6A6E37" />
          <Name>{name}</Name>
          <Feather name='chevron-down' color='#6A6E37' size={18}/>
        </Header>
        <Title>Descubra novas criaturas e junte-se a nós! 🐲</Title>
        <Routes />
        <Modal 
           animationType="slide"
           transparent={true}
           visible={modalVisible}
           onRequestClose={() => {
             setModalVisible(!modalVisible);
           }}
        >
          <ModalView>
         <Close>
           <ClosePress onPress={()=> {
             setModalVisible(false)
           }}>

           </ClosePress>
         </Close>

          <LogView
            onPress={()=> {
              clearCaps([])
              clearFavs([])
              AsyncStorage.clear().then(()=> {
                navigation.replace('Login')
              })
            }}
          >
            <Logout>Sair</Logout>
          </LogView>
          </ModalView>
        </Modal>
      </Container>
          
  )
}
const mapState = state => {
  return {

  }
}

export default connect(mapState, {
  clearCaps, 
  clearFavs
})(Main);