import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Card from './Card'

// import { Container } from './styles';

const Captured = ({ caps }) => {

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
        caps.length > 0? caps.map(cap => (
          <Card name={cap.name} url={cap.url} key={cap.url} />
        )): false
      }
    </ScrollView>
  )
}


const mapState = state => {
  return {
    caps: state.Captureds
  }
}


export default connect(mapState, {

})(Captured);