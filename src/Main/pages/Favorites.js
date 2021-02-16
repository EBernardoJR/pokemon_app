import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import FavoritesContext from '../../FavoritesContext'
import Card from './Card'
// import { Container } from './styles';

const Favorites = ({favs}) => {

 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEDBE',
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderLeftColor: '#6A6E37'
    }
  })


  return (
  
    <ScrollView style={styles.container}>
      {
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