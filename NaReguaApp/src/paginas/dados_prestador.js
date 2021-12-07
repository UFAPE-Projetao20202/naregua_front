import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useAuth } from '../contexts/auth';


const DadosPrestador = ({ navigation })  => {
  const user = {name: 'jnfdjndj', email: 'jndkfjfd@dfjdf.com', password: 'nfcdkjd'}

  return (
  <View style={styles.container}>
    <ScrollView style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>MEUS DADOS</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      <View>
          <View style={styles.row}>
              <View style={styles.rowData}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.itemText}>{user.name}</Text>
              </View>
              <Icon style={styles.icon} name="pencil" type="FontAwesome" size={18} color="black" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            <View style={styles.rowData}>
                <Text style={styles.label}>E-mail:</Text>
                <Text style={styles.itemText}>{user.email}</Text>
            </View>
            <Icon style={styles.icon} name="pencil" type="FontAwesome" size={18} color="black" onPress={() => {}} />
          </View>
          <View style={styles.row}>
              <View style={styles.rowData}>
                <Text style={styles.label}>Senha:</Text>
                <Text style={styles.itemText}>******</Text>
              </View>
              <Icon style={styles.icon} name="pencil" type="FontAwesome" size={18} color="black" onPress={() => {}} />
            </View>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity onPress={() => ''} style={styles.btn}>
            <Text style={styles.btnText}>DADOS DE PAGAMENTO</Text>
        </TouchableOpacity>
      </View>
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
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PerfilPrestador')}>
          <Icon name="user" type="FontAwesome" size={24} color="grey"/>
          <Text style={styles.appFooterText}>Perfil</Text>
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
  rowData: {
    flex: 0,
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerHeader: {
    marginVertical: 10
  },
  divider: {
    marginVertical: 10
  },
  itemText: {
    marginVertical: 3,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginHorizontal: 10
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
  },
  btn: {
    width: '60%',
    borderRadius: 15,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  btnText: {
      color: 'white'
  },
  btnCont: {
    alignItems: 'center'
  }
});

export default DadosPrestador;