import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioCliente from '../paginas/inicio_cliente';
import PerfilCliente from '../paginas/perfil_cliente';
import Chats from '../paginas/chats';
import Notificacao from '../paginas/notificacao';
import ListaNotificacoes from '../paginas/lista_notificacoes';
import Favoritos from '../paginas/favoritos';
import Endereco from '../paginas/endereco';
import DadosCliente from '../paginas/dados_cliente';
import CadastroEndereco from '../paginas/cadastro_endereco';

const ClienteStack = createNativeStackNavigator();

function AppClienteRoute() {
  return (
    <ClienteStack.Navigator initialRouteName="InicioCliente">
        <ClienteStack.Screen name="InicioCliente" component={InicioCliente} options={{title: 'Inicio'}}/>
        <ClienteStack.Screen name="PerfilCliente" component={PerfilCliente} options={{title: 'Meu Perfil'}}/>
        <ClienteStack.Screen name="Chats" component={Chats} options={{title: 'Chats'}}/>
        <ClienteStack.Screen name="ListaNotificacoes" component={ListaNotificacoes} options={{title: 'Lista de Notificações'}}/>
        <ClienteStack.Screen name="Notificacao" component={Notificacao} options={{title: 'Notificacao'}}/>
        <ClienteStack.Screen name="Favoritos" component={Favoritos} options={{title: 'Favoritos'}}/>
        <ClienteStack.Screen name="Endereco" component={Endereco} options={{title: "Meus Endereços"}}/>
        <ClienteStack.Screen name="DadosCliente" component={DadosCliente} options={{title: 'Meus Dados'}}/>
        <ClienteStack.Screen name="CadastroEndereco" component={CadastroEndereco} options={{title: "Novo Endereço"}}/>
    </ClienteStack.Navigator>
  );
}

export default AppClienteRoute;