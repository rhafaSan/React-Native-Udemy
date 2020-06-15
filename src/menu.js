import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => < MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },

    Inverter: {
        screen: () => <Inverter texto='React Nativo'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simple: {
        screen: () => <Simple texto="Flexivel!" />
    }
}, {drawerWidth: '300'})