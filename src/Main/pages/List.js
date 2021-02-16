import React, { useState, useEffect} from 'react';
import axios from 'axios'

import { View, StyleSheet, FlatList, Text } from 'react-native';
import Card from './Card'

// import { Container } from './styles';

const List = () => {

  const [ offSet, changeOffSet ] = useState(20)
  const [ pokes, changePokes ] = useState([])
 

  async function getInitialPokes(){
    await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20').then((response)=> {
      changePokes(response.data.results)
      console.log(response.data.results)
    })
  }

  useEffect(()=> {
    getInitialPokes()
  }, [])

  async function loadPokes(){
    
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`).then((response)=> {
      changePokes([ ...pokes, ...response.data.results])
    })
    changeOffSet(offSet + 20)
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEDBE',
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderLeftColor: '#6A6E37'
    }
  })

  return (
  

    <View style={styles.container}>
      { pokes.length > 1 ? 
      <FlatList 
      data={pokes}
      onEndReached={loadPokes}//disparada qnd o usuario cehgar no final da lista
      onEndReachedThreshold={0.2} //quando tiver em 20% da tela vai carregar novos itens
      keyExtractor={ poke => poke.url}
      // showsVerticalScrollIndicator={false}
      renderItem={({ item: poke }) => {
        
        return (
          <Card name={poke.name} url={poke.url}/> 
          )}}
          />:
          <Text>Sem items no momento</Text>
        }
      
      
    </View>
  )
}

export default List;