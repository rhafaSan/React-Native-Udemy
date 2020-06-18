import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Default from '../style/Default'

export default class Evento extends Component{
    state= {
        texto : ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }


    render() {
        return (
            <View>
                <Text style={Default.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Default.input}
                    onChangeText={this.alterarTexto}
                />
            </View>
        )
    }
}