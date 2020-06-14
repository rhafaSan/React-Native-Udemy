import React from 'react';
import { Text } from 'react-native';
import Default from '../style/Default'

// export default function (props){
//   return <Text>{props.texto}</Text>
// };

export default props => 
	<Text style={Default.ex}>
		Arrow: {props.texto}
	</Text>
