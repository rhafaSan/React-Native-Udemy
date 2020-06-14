import React from 'react';
import { View, Text } from 'react-native';
import Default from '../style/Default'
import If from './If'

function parOuImpar(num){
  // if(num % 2 == 0){
  //   return <Text style={Default.ex}>Par</Text>
  // } else{
  //   return <Text style={Default.ex}>Impar</Text>
  // }

  const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Default.ex}>{v}</Text> 
}


export default props => 
  <View>
    {parOuImpar(props.numero)}
    {/* {
      props.numero % 2 == 0 ?
      <Text style={Default.ex}>Par</Text> :
      <Text style={Default.ex}>Impar</Text>
    } */}
  </View>