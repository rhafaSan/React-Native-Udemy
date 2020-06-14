import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simple from './components/Simple'
// import { Container } from './styles';

export default class App extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Simple texto='Flexível'/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	f20:{
		fontSize: 40,
	}
})