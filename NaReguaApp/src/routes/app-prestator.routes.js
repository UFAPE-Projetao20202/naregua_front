import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioPrestador from '../paginas/inicio_prestador';
import CadastroServico from '../paginas/cadastro_servico';

const PrestadorStack = createNativeStackNavigator();

function AppPrestadorRoute() {
  return (
    <PrestadorStack.Navigator initialRouteName="InicioPrestador">
      <PrestadorStack.Screen name="InicioPrestador" component={InicioPrestador} options={{ headerShown: false }}/>
      <PrestadorStack.Screen name="CadastroServico" component={CadastroServico} options={{ title: 'Novo Serviço'}}/>
    </PrestadorStack.Navigator>
  );
}

export default AppPrestadorRoute;