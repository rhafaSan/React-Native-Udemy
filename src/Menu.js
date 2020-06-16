import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer, useLinkProps } from '@react-navigation/native'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

const Drawer = createDrawerNavigator()

function Menu(){
    return (
        <NavigationContainer>

        <Drawer.Navigator initialRouteName="Home">

            <Drawer.Screen name='Mega Sena' component={MegaSena}/>
            <Drawer.Screen name='Inverter' component={Inverter}/>
            <Drawer.Screen name='Par e Impar' component={ParImpar}/>
            <Drawer.Screen name='Simple' component={Simple}/>
        </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Menu

// export default createDrawerNavigator({
//     MegaSena: {
//         screen: () => < MegaSena numeros={8} />,
//         navigationOptions: { title: 'Mega Sena' }
//     },

//     Inverter: {
//         screen: () => <Inverter texto='React Nativo'/>
//     },
//     ParImpar: {
//         screen: () => <ParImpar numero={30} />,
//         navigationOptions: { title: 'Par & Impar'}
//     },
//     Simple: {
//         screen: () => <Simple texto="Flexivel!" />
//     }
// }, {drawerWidth: '300'})