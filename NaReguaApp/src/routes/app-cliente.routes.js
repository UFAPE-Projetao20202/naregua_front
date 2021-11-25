import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioCliente from '../paginas/inicio_cliente';
import PerfilCliente from '../paginas/perfil_cliente';
import Endereco from '../paginas/endereco';
import CadastroEndereco from '../paginas/cadastro_endereco';

const ClienteStack = createNativeStackNavigator();

function AppClienteRoute() {
  return (
    <ClienteStack.Navigator initialRouteName="InicioCliente">
        <ClienteStack.Screen name="InicioCliente" component={InicioCliente} options={{ title: 'Inicio'}}/>
        <ClienteStack.Screen name="PerfilCliente" component={PerfilCliente} options={{title: 'Meu Perfil'}}/>
        <ClienteStack.Screen name="Endereco" component={Endereco} options={{title: "Meus Endereços"}}/>
        <ClienteStack.Screen name="CadastroEndereco" component={CadastroEndereco} options={{title: "Novo Endereço"}}/>
    </ClienteStack.Navigator>
  );
}

export default AppClienteRoute;