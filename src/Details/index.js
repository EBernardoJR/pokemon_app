import React, { useState, useEffect } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { connect } from 'react-redux'
import { changeCaps} from '../Main/actions/capsActions'
import axios from 'axios'

import { Container, Card, Capture, CaptureBar, Back, BackText, Name, Icon, Weight, Stats, Stat, MoveTitle, Movebar, MoveItem } from './styles';

const Details = ({ route, navigation, changeCaps, caps }) => {

  const [data, setData] = useState([])
  const [iscap, setCap] = useState(false)
  const [moves, setMoves] = useState([])
  const [imgSource, setImg] = useState('https://cdn2.vectorstock.com/i/1000x1000/73/91/pokemon-logo-icon-template-vector-23237391.jpg')

  async function getData(){
      await axios.get(route.params.url).then( r => {
        setData(r.data)
        setImg(r.data.sprites.front_default)
        
        return r.data.moves
      }).then((moves) => {

        var count = 0
  
        var array = []
  
        while(count < 4){
          array.push(moves[count])
          count +=1
  
        }
        setMoves(array)
      })


  }


  function isCap(){
    caps.forEach(element => {
      if(element.url === route.params.url ){
        setCap(true)
      }
    });
  }

  useEffect(()=> {
     getData()
     isCap()
  }, [])


  return (
    <Container>
      <Back
        onPress={()=> {
          navigation.goBack()
        }}
      >
        <Feather name='arrow-left' color='#6A6E37' size={25}/>
        <BackText>Voltar</BackText>
      </Back>
      <Card>
        <Name>{data.name}</Name>
        <Icon source={{ uri: imgSource}}/>
        <Weight>Peso: {data.weight}</Weight>
        <Stats>
          {
            data.stats ? 
            data.stats.map((s)=>(
          <Stat key={s.stat.url}>
            {s.stat.name}: {s.base_stat}
          </Stat>
            )) : false
          }
        </Stats>
        <MoveTitle>Movimentos:</MoveTitle>
        <Movebar>
          {
            moves.length > 1? moves.map(m => (
              <MoveItem key={m.move.name}>
                {m.move.name}
              </MoveItem>
            )): false
          }
            
        </Movebar>
      </Card>

    <CaptureBar onPress={()=> {

        var exists = caps.find(e => {
          return e.url === route.params.url
        })
        if(exists){
        return false
        }
        else{
          setCap(true)
          changeCaps({
            url: route.params.url,
            name: data.name
          })
        }
    }}>
      <Capture>
        {
          iscap ? 'Capturado': 'Capturar'
        }
        
      </Capture>
      <Feather name='package' color='#6A6E37' size={25}/>
    </CaptureBar>
    </Container>
  )
}

const mapState = state => {
  return {
    caps: state.Captureds
  }
}

export default connect(mapState, {
  changeCaps
})(Details);