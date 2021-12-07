import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import api from '../services/api';

const PerfilCliente = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const cliente = {name: 'Nome do Cliente'};

  return (
  <View style={styles.container}>
    <ScrollView style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>{cliente.name}</Text>
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
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ListaNotificacoes', {prestador: false})}>
        <Icon style={styles.icon} name="bell" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Notificações</Text>
          <Text style={styles.itemDescription}>Minha central de notificações</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Favoritos')}>
        <Icon style={styles.icon} name="heart" type="FontAwesome" size={20} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Favoritos</Text>
          <Text style={styles.itemDescription}>Meus locais favoritos</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Endereco')}>
        <Icon style={styles.icon} name="map-marker" type="FontAwesome" size={24} color="black" onPress={() => {}} />
        <View style={styles.column}>
          <Text style={styles.itemText}>Endereços</Text>
          <Text style={styles.itemDescription}>Meus endereços</Text>
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
      <TouchableOpacity style={styles.row} onPress={showDialog}>
        <Icon style={styles.icon} name="sign-out" type="FontAwesome" size={24} color="black"/>
        <View style={styles.column}>
          <Text style={styles.itemText}>Sair</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
    <Modal transparent={true} visible={visible} onRequestClose={hideDialog}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.itemText}>Fazer logout?</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={hideDialog} style={styles.dialogBtn}>
              <Text style={styles.buttonText}>NÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ''} style={styles.dialogBtn}>
              <Text style={styles.buttonText}>SIM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    <View style={styles.appFooter}>
      <Divider style={styles.divider}></Divider>
      <View style={styles.appFooterRow}>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('InicioCliente')}>
          <Icon name="home" type="FontAwesome" size={27} color="grey"/>
          <Text style={styles.appFooterText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
          <Icon name="search" type="FontAwesome" size={22} color="grey"/>
          <Text style={styles.appFooterText}>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PedidosCliente')}>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    width: '70%'
  },
  dialogBtn: {
    width: 110,
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004A5A',
    marginTop: 15
  },
  buttonText: {
    color: 'white'
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

export default PerfilCliente;