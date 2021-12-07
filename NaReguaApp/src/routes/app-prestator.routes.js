import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioPrestador from '../paginas/inicio_prestador';
import CadastroServico from '../paginas/cadastro_servico';
import PerfilPrestador from '../paginas/perfil_prestador';
import Chats from '../paginas/chats';
import ListaNotificacoes from '../paginas/lista_notificacoes';
import Notificacao from '../paginas/notificacao';
import Endereco from '../paginas/endereco';
import CadastroEndereco from '../paginas/cadastro_endereco';

const PrestadorStack = createNativeStackNavigator();

function AppPrestadorRoute() {
  return (
    <PrestadorStack.Navigator initialRouteName="InicioPrestador">
      <PrestadorStack.Screen name="InicioPrestador" component={InicioPrestador}/>
      <PrestadorStack.Screen name="CadastroServico" component={CadastroServico} options={{ title: 'Novo Serviço'}}/>
      <PrestadorStack.Screen name="PerfilPrestador" component={PerfilPrestador} options={{title: 'Meu Perfil'}}/>
      <PrestadorStack.Screen name="Chats" component={Chats} options={{title: 'Chats'}}/>
      <PrestadorStack.Screen name="ListaNotificacoes" component={ListaNotificacoes} options={{title: 'Lista de Notificações'}}/>
      <PrestadorStack.Screen name="Notificacao" component={Notificacao} options={{title: 'Notificação'}}/>
      <PrestadorStack.Screen name="Endereco" component={Endereco} options={{title: "Meus Endereços"}}/>
      <PrestadorStack.Screen name="CadastroEndereco" component={CadastroEndereco} options={{title: "Novo Endereço"}}/>
    </PrestadorStack.Navigator>
  );
}

export default AppPrestadorRoute;