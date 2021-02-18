import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { changeFavs } from '../../actions/favsActions'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card = ({ name, url, changeFavs, favs }) => {

  const navigation = useNavigation()

  const [item, setItem] = useState('')
  const [liked, setLiked] = useState(false)
  const [imgUrl, setImgURl] = useState('https://cdn2.vectorstock.com/i/1000x1000/73/91/pokemon-logo-icon-template-vector-23237391.jpg')
  
  function isLiked(){
    favs.forEach(element => {
      if(element.url === url ){
        setLiked(true)
      }
    });
  }

  function getItem(){
    axios.get(url).then(response => {
      setItem(response.data)
      setImgURl(response.data.sprites.front_default)
    })
  }

  useEffect(() => {
    getItem()
    isLiked()
  }, [])


  return (

    <View style={ styles.container }> 
      <View style={styles.header}>
      <View style={styles.icon}>
          <Image source={{ uri: imgUrl
           }} style={{
             width: '100%',
             height: '100%'
            }}/>
      </View>
      <Text style={ styles.title }>{name}</Text>
      </View>
      <View style={styles.types}>
        <Text
        style={{
          color: '#6C6E58',
          fontWeight: '300',
          fontSize: 15
        }}
        >Tipos</Text>
        <View style={styles.items}>
        {
          item.types == undefined ? false:
          
          item.types.map(t => (
            <View style={styles.itemName} key={t.slot}>
            <Text
              style={{
                fontSize: 15,
                color: '#6C6E58'
              }}
              >{t.type.name}</Text>
          </View>

))
}
          
        </View>

        <View style={styles.footer}>
            <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10
            }}
            onPress={()=> {
              var exists = favs.find(e => {
                  return e.url === url
              })
              if(exists){
                return false
              }
              else{
                setLiked(true)
                changeFavs({
                  url, name
                })
            }
            }}
            >
            {
                liked ?<> 
                <AntDesign name='heart' color='#8360A1' size={20}/>
                <Text style={{
                fontSize: 16,
                marginLeft: 5,
                color: '#8360A1'
                }}>Salvo</Text>
                </>:<> 
                <AntDesign name='hearto' color='#6A6E37' size={20}/>
                <Text style={{
                fontSize: 16,
                marginLeft: 5,
                color: '#6A6E37'
              }}>Salvar</Text>
                </>
            }
        
              
            </TouchableOpacity>


            <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10
            }}
            onPress={() => {
              navigation.navigate('Details', {
                url: url
              })
            }}
            >
              <Text style={{
                fontSize: 16,
                marginRight: 5,
                color: '#6A6E37'
              }}>Explorar</Text>
              <Feather name='arrow-right' color='#6A6E37' size={20}/>
            </TouchableOpacity>
        </View>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#FDFFE6',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
    minHeight: 200,
    borderRadius: 10,
    borderColor: '#6A6E37',
    borderWidth: StyleSheet.hairlineWidth,
  },
  title: {
    color: '#6C6E58',
    fontWeight: 'bold',
    fontSize: 16
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#FDFFE6',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    overflow: 'hidden'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  types: {
    margin: 10
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  itemName: {
    backgroundColor: '#EAEDBE',
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 15,
    borderRadius: 10
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    borderTopColor: '#6A6E37',
    borderTopWidth: StyleSheet.hairlineWidth,
  }
});

const mapState = state => {
  return {
    favs: state.Favorites
  }
}

export default connect(mapState, {
  changeFavs
})(Card);
