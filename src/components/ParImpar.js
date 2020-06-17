import React from 'react';
import { View, Text } from 'react-native';
import Default from '../style/Default'
import If from './If'

function parOuImpar(num){  
  const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Default.ex}>{v}</Text> 
}


export default props => 
  <View>
    {parOuImpar(props.numero)}
  </View>