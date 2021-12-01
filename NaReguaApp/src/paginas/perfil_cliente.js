import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import api from '../services/api';

const PerfilCliente = ({ navigation }) => {

  const cliente = {name: 'Nome do Cliente'};

  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>{cliente.name}</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Chats')}>
        <Icon name="comment" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Chats</Text>
          <Text style={styles.itemDescription}>Minhas conversas</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon name="bell" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Notificações</Text>
          <Text style={styles.itemDescription}>Minha central de notificações</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Favoritos')}>
        <Icon name="heart" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Favoritos</Text>
          <Text style={styles.itemDescription}>Meus locais favoritos</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Endereco')}>
        <Icon name="map-marker" type="FontAwesome" size={24} color="black" onPress={() => {}} />
        <View style={styles.column}>
          <Text style={styles.itemText}>Endereços</Text>
          <Text style={styles.itemDescription}>Meus endereços</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon name="id-card" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Meus Dados</Text>
          <Text style={styles.itemDescription}>Informações da minha conta</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => {}}>
        <Icon name="sign-out" type="FontAwesome" size={24} color="black"/>
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
    width: '90%'
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
});

export default PerfilCliente;