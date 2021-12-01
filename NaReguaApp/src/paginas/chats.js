import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Chats = ({ navigation })  => {
    let dados = [
        {
            nome: 'Nome do prestador',
            id_pedido: '4787584',
            data_pedido: '12/01/21',
            telefone: '(81) 99999-9999',
            whatsapp: true
        },
        {
            nome: 'Nome do prestador 2',
            id_pedido: '44585494',
            data_pedido: '15/01/21',
            telefone: '(87) 99888-9999',
            whatsapp: false
        }
    ];

  useEffect(() => {
  }, []);

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>CHATS</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      {dados.map((item) => (
        <View>
            <TouchableOpacity key={item.id_pedido}>
                <Text style={styles.itemText}>{item.nome}</Text>
                <Text style={styles.itemData}>Pedido {item.id_pedido} • {item.data_pedido}</Text>
                {
                item.whatsapp === true && 
                <Text style={styles.itemDescription}>CLIQUE PARA SER REDIRECIONADO AO WHATSAPP DESSE ESTABELECIMENTO</Text>
                }
                {
                item.whatsapp === false && 
                <Text style={styles.itemDescription}>ESSE ESTABELECIMENTO NÃO CONECTOU UM NÚMERO DE WHATSAPP, ENTRE EM CONTATO POR LIGAÇÃO: {item.telefone}</Text>
                }
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
        </View>
      ))}
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
  rowChat: {
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
    fontSize: 18,
    color: 'black',
  },
  itemData: {
    marginVertical: 2,
    marginHorizontal: 10,
    fontSize: 14,
    color: 'grey',
  },
  itemDescription: {
    marginVertical: 2,
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#004A5A',
  },
  addText: {
    marginVertical: 3,
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
});

export default Chats;