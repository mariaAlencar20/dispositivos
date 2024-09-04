import React from 'react';
import {View, Text} from 'react-native';
import Estilo from '../styles/Style';

//pode ser por meio de classe ou função
//tudo que o componente tiver pronto ele vai deixar para o tela 1 

class Tela1 extends React.Component {   // componente é algo que eu posso reaproveitar

    render() {    //render vai mostrar na tela, coloca apenas com a classe
        return (
            
            //View está funcionando como uma div

            <View style={Estilo.container}>  
              <Text>Tela 1 -Exemplo!</Text>
            </View>
         )
     }
}

export default Tela1;