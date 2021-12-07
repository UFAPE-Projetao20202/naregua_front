import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../contexts/auth';

const PerfilPrestador = ({ navigation }) => {
  const { user } = useAuth();

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>{user.name}</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Chats')}>
        <Icon style={styles.icon} name="comment" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Chats</Text>
          <Text style={styles.itemDescription}>Minhas conversas</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ListaNotificacoes')}>
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
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Loja', {prestador: user})}>
        <Icon style={styles.icon} name="store" type="MaterialIcons" size={23} color="black" onPress={() => {}} />
        <View style={styles.column}>
          <Text style={styles.itemText}>Minha Loja</Text>
          <Text style={styles.itemDescription}>Visualizar o perfil da minha loja</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('DadosCliente')}>
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
      <TouchableOpacity style={styles.row} onPress={() => {}}>
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
  }
});

export default PerfilPrestador;