import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

function Mega(){
    return (
        <MegaSena numeros={6}/>
    )
}

function Inv(){
    return (
        <Inverter texto='React Native!!'/>
    )
}

function Simples(){
    return(
        <Simple texto='Flexível!'/>
    )
}

function ParOuImpar(){
    return (
        <ParImpar numero={10} />
    )
}

const Drawer = createDrawerNavigator()

function Menu(){
    return (
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name='Mega Sena' component={Mega}/>
                <Drawer.Screen name='Inverter' component={Inv} texto="React Native"/>
                <Drawer.Screen name='Par e Impar' component={ParOuImpar}/>
                <Drawer.Screen name='Simple' component={Simples}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Menu
