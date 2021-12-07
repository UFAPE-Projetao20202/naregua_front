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
import BuscarPrestador from '../paginas/buscar_prestador';
import ListarServicosPrestador from '../paginas/listar_servicos_prestador';
import Servico from '../paginas/servico';
import PedidosCliente from '../paginas/pedidos_cliente';
import Agendamento from '../paginas/agendamento'
import AgendamentoConcluido from '../paginas/agendamento_concluido';

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
        <ClienteStack.Screen name="BuscarPrestador" component={BuscarPrestador} options={{title: "Buscar Prestador"}}/>
        <ClienteStack.Screen name="ListarServicosPrestador" component={ListarServicosPrestador} options={{title: "Listagem de serviços"}}/>
        <ClienteStack.Screen name="Servico" component={Servico} options={{title: "Serviço"}}/>
        <ClienteStack.Screen name="PedidosCliente" component={PedidosCliente} options={{title: "Pedidos do cliente"}}/>
        <ClienteStack.Screen name="Agendamento" component={Agendamento} options={{title: "Agendamento"}}/>
        <ClienteStack.Screen name="AgendamentoConcluido" component={AgendamentoConcluido} options={{title: "Agendamento Concluido"}}/>
    </ClienteStack.Navigator>
  );
}

export default AppClienteRoute;