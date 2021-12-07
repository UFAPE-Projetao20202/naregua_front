import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const PerfilPrestador = ({ navigation }) => {
  let prestador = {name: 'Nome do prestador'};

  return (
  <View style={styles.container}>
    <ScrollView style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>{prestador.name}</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Chats', {prestador: true})}>
        <Icon style={styles.icon} name="comment" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Chats</Text>
          <Text style={styles.itemDescription}>Minhas conversas</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ListaNotificacoes', {prestador: true})}>
        <Icon style={styles.icon} name="bell" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Notificações</Text>
          <Text style={styles.itemDescription}>Minha central de notificações</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon style={styles.icon} name="schedule" type="MaterialIcons" size={21} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Horários</Text>
          <Text style={styles.itemDescription}>Meus horários</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon style={styles.icon} name="store" type="MaterialIcons" size={23} color="black" onPress={() => {}} />
        <View style={styles.column}>
          <Text style={styles.itemText}>Minha Loja</Text>
          <Text style={styles.itemDescription}>Visualizar o perfil da minha loja</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('DadosPrestador')}>
        <Icon style={styles.icon} name="id-card" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Meus Dados</Text>
          <Text style={styles.itemDescription}>Informações da minha conta</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon style={styles.icon} name="star" type="FontAwesome" size={24} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Avaliações</Text>
          <Text style={styles.itemDescription}>Avaliações da minha loja</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('PedidosPrestador')}>
        <Icon style={styles.icon} name="dollar" type="FontAwesome" size={22} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Pedidos</Text>
          <Text style={styles.itemDescription}>Pedidos recebidos pela minha loja</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon style={styles.icon} name="poll" type="MaterialIcons" size={24} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Estatísticas</Text>
          <Text style={styles.itemDescription}>Estatísticas da minha loja</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon style={styles.icon} name="sign-out" type="FontAwesome" size={24} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Sair</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
    <View style={styles.appFooter}>
      <Divider style={styles.divider}></Divider>
      <View style={styles.appFooterRow}>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('InicioPrestador')}>
          <Icon name="home" type="FontAwesome" size={27} color="grey"/>
          <Text style={styles.appFooterText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
          <Icon name="store" type="MaterialIcons" size={27} color="grey"/>
          <Text style={styles.appFooterText}>Minha Loja</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PedidosPrestador')}>
          <Icon name="dollar" type="FontAwesome" size={23} color="grey"/>
          <Text style={styles.appFooterText}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
          <Icon name="user" type="FontAwesome" size={24} color="black"/>
          <Text style={styles.appFooterTextActive}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 15
  },
  content: {
    width: '100%',
    height: '100%'
  },
  pageTitle: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: '500',
    width: '100%'
  },
  row: {
    flex: 0,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  divider: {
    marginVertical: 10
  },
  dividerHeader: {
    marginVertical: 10
  },
  itemText: {
    marginVertical: 3,
    marginHorizontal: 10,
    fontSize: 17,
    color: 'black',
  },
  itemDescription: {
    marginVertical: 2,
    marginHorizontal: 10,
    fontSize: 15,
    color: 'grey',
  },
  icon: {
    width: '7%'
  },
  appFooter: {
    height: 50
  },
  appFooterRow: {
    flex: 0,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  appFooterIcon: {
    width: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  appFooterText: {
    color: 'grey',
    fontSize: 12
  },
  appFooterTextActive: {
    color: 'black',
    fontSize: 12
  }
});

export default PerfilPrestador;