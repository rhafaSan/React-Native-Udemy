import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/Comunicacao'

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

function Cont(){
    return(
        <Contador numeroInicial={0}/>
    )
}

function Plataform(){
    return (
        <Plataformas />
    )
}

function ValidProps(){
    return (
        <ValidarProps ano={20} />
    )
}

function Event(){
    return(
        <Evento/>
    )
}

function Comu(){
    return(
        <Avo nome='João' sobrenome='Silva' />
    )
}

const Drawer = createDrawerNavigator()

function Menu(){
    return (
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name='Comunicação' component={Comu}/>
                <Drawer.Screen name='Evento' component={Event}/>
                <Drawer.Screen name='Validar' component={ValidProps}/>
                <Drawer.Screen name='Plataforma' component={Plataform}/>
                <Drawer.Screen name='Contador' component={Cont}/>
                <Drawer.Screen name='Mega Sena' component={Mega}/>
                <Drawer.Screen name='Inverter' component={Inv} />
                <Drawer.Screen name='Par e Impar' component={ParOuImpar}/>
                <Drawer.Screen name='Simple' component={Simples}/>
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Menu
