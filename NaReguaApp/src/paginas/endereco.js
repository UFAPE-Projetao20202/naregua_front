import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import api from '../services/api';
import { useAuth } from '../contexts/auth';

const Endereco = ({ navigation })  => {
  //const { user } = useAuth();
  let user = {name: 'Nome do usuario'};

  const [listaEnderecos, setlistaEnderecos] = useState([]);

  /*useEffect(() => {
    listarEnderecos();
  }, []);*/

  async function listarEnderecos() {
    // try {
    //   let res1 = await api.get('/providers/address');
    //   setlistaEnderecos(res1.data);
    // } catch (error) {
    //   console.log(error.response.data);
    // }
    setlistaEnderecos(
      [{
        id: 1,
        name: 'Nome do Endereco 1',
        street: 'Nome da Rua',
        state: 'Nome do Estado',
        complement: 'anjmdkmkfdmkkkf',
      },
      {
        id: 2,
        name: 'Nome do Endereco 2',
        street: 'Nome da Rua',
        state: 'Nome do Estado',
        complement: 'anjmdkmkfdmkkkf',
      },
      {
        id: 3,
        name: 'Nome do Endereco 3',
        street: 'Nome da Rua',
        state: 'Nome do Estado',
        complement: 'anjmdkmkfdmkkkf',
      }]
    )
  }

  return (

  <View style={styles.container}>
    <ScrollView style={styles.content}>
      <View style={styles.row}>
        <Icon style={styles.backButton} name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>{user.name}</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      {listaEnderecos.map((item) => (
        <View style={styles.rowAddress} key={item.id}>
          <Icon name="home" type="FontAwesome" size={24} color="black" onPress={() => {}} />
          <View style={styles.column}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.street}</Text>
            <Text style={styles.itemDescription}>{item.state}</Text>
            <Text style={styles.itemDescription}>{item.complement}</Text>
          </View>
        </View>
      ))}
      <Divider style={styles.divider}></Divider>
      <TouchableOpacity style={styles.rowAdd} onPress={() => navigation.navigate('CadastroEndereco')}>
        <Icon name="plus" type="FontAwesome" size={22} color="black" onPress={() => {}} />
        <Text style={styles.addText}>Adicionar Endereço</Text>
      </TouchableOpacity>
    </ScrollView>
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
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PerfilCliente')}>
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
  rowAddress: {
    flex: 0,
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
  },
  rowAdd: {
    flex: 0,
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  dividerHeader: {
    marginVertical: 10
  },
  divider: {
    marginVertical: 10
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 5
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
  addText: {
    marginVertical: 3,
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
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

export default Endereco;