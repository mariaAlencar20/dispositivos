import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Tela1 from './componentes/Tela1';
import Tela2 from './componentes/Tela2';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tela 1" component={Tela1}/>
        <Drawer.Screen name="Tela 2" component={Tela2}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

