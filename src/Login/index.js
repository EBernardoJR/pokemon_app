import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import logo from '../../assets/pokemon-logo.png'
import { Container, Header, Logo, Form, Label, 
  Input, Footer, Register, BottomRegister, BottomOptionsDisable, 
  Options,
  OptionsBar,
  BottomOptionsAble,
  OptionsAble
 } from './styles';

const Login = ({ navigation }) => {

  const [ gender, setGender ] = useState(null)
  const [ name, setName ] = useState(null)
  const [ age, setAge ] = useState(null)

  function handleLogin(){
    if(!name || !age || !gender){
      alert('Preencha todos os campos')
    }else {
      AsyncStorage.setItem('name', name)
      AsyncStorage.setItem('age', age)
      AsyncStorage.setItem('gender', gender)

      navigation.replace('Main')
    }
  }

  useEffect(()=> {
    AsyncStorage.getItem('name').then(n => {
      if(n){
        navigation.replace('Main')
      }
    })
  }, [])

  

  return (
    <Container>

      <Header>
        <Logo source={logo} />
      </Header>
      <Form>
        <Label>Seu Nome</Label>
        <Input placeholder='Exemplo: João da Silva' value={name} onChangeText={(text) => setName(text)}></Input>
        <Label>Sua Idade</Label>
        <Input placeholder='Exemplo: 14' value={age} onChangeText={(text) => setAge(text)}></Input>
        <Label>Sexo</Label>
        <OptionsBar>
        {
          gender == 'male' ? 
          <BottomOptionsAble>
          <OptionsAble>Masculino</OptionsAble>
        </BottomOptionsAble>
          : 
          <BottomOptionsDisable onPress={()=> setGender('male')}>
          <Options>Masculino</Options>
          </BottomOptionsDisable>
        }
         {
          gender == 'female' ? 
          <BottomOptionsAble>
          <OptionsAble>Feminino</OptionsAble>
        </BottomOptionsAble>
          : 
          <BottomOptionsDisable onPress={()=> setGender('female')}>
          <Options>Feminino</Options>
          </BottomOptionsDisable>
        }
        </OptionsBar>
      </Form>
      <Footer>
        <BottomRegister onPress={handleLogin}>
          <Register>Registrar-se</Register>
          <Feather name='chevron-right' color='#EAEDBE' size={18}/>
        </BottomRegister>
      </Footer>
    </Container>
  );
}

export default Login;