import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioCliente from '../paginas/inicio_cliente';

const ClienteStack = createNativeStackNavigator();

function AppClienteRoute() {
  return (
    <ClienteStack.Navigator initialRouteName="InicioCliente">
        <ClienteStack.Screen name="InicioCliente" component={InicioCliente}/>
    </ClienteStack.Navigator>
  );
}

export default AppClienteRoute;