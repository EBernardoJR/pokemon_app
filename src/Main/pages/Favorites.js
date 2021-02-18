import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux'
import FavoritesContext from '../../FavoritesContext'
import { AntDesign, Feather } from '@expo/vector-icons';
import Card from './Card'
// import { Container } from './styles';

const Favorites = ({favs}) => {

  const [ filter, setFilter ] = useState(false)
 
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
  
    <ScrollView style={styles.container}>
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
        filter.length > 0? <Text style={{ fontSize: 16, marginLeft: 20, color: '#6A6E37'}}>Resultados para: 
        <Text style={{
          fontWeight: 'bold',
          marginLeft: 5
        }}>
          {filter}
        </Text>
          </Text>:  false
      }
      {

        filter.length > 0? favs.map(fav=> {
          if(fav.name.includes(filter)){
            return (
              <Card name={fav.name} url={fav.url} key={fav.url}/>
            )
          }else {
            return false
          }
        }):

        favs.map(fav => (
          <Card name={fav.name} url={fav.url} key={fav.url}/>
        ))
      }
    </ScrollView>
  )
}

const mapState = state => {
  return {
    favs: state.Favorites
  }
}

export default connect(mapState, {
})(Favorites)