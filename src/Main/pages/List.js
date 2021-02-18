import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { View, StyleSheet, FlatList, Text, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Card from './Card'

// import { Container } from './styles';

const List = () => {
  const [ filter, setFilter ] = useState(false)
  const [ offSet, changeOffSet ] = useState(20)
  const [ pokes, changePokes ] = useState([])
 

  async function getInitialPokes(){
    await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20').then((response)=> {
      changePokes(response.data.results)
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
    },
    searchBar: {
      alignSelf: 'center',
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between',
      backgroundColor: '#FDFFE6',
      padding: 8,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#6A6E37'
    }
  })

  return (
  

    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder='Filtrar por nome' value={filter}
        autoCorrect={false}
        onChangeText={text => setFilter(text)}
        style={{
          flex: 1
        }}/>
        <Feather name='search' color='#6A6E37' size={20}/>
      </View>
      
      { 
      filter.length > 1 ? pokes.map(poke=> {
        if(poke.name.includes(filter)){
          return (
            <Card name={poke.name} url={poke.url} key={poke.url}/>
          )
        }else {
          return false
        }
      }) :
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
          />
        }
      
      
    </SafeAreaView>
  )
}

export default List;