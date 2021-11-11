import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioCliente from '../paginas/inicio_cliente';
import InicioPrestador from '../paginas/inicio_prestador';
import Cadastro from '../paginas/cadastro';
import Login from '../paginas/login';
import CadastroServico from '../paginas/cadastro_servico';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="InicioCliente" component={InicioCliente}/>
        <Stack.Screen name="CadastroServico" component={CadastroServico} options={{ title: 'Novo Serviço'}}/>
        <Stack.Screen name="InicioPrestador" component={InicioPrestador} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;