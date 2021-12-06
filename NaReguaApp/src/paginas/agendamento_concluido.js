import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const AgendamentoConcluido = ({ navigation })  => {
    let prestador = false;
    let dados = {
            nome: 'Nome',
            id_pedido: '4787584',
            data_pedido: '12/01/21',
            telefone: '(81) 99999-9999',
            whatsapp: true
        };

  useEffect(() => {
  }, []);

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>AGENDAMENTO CONCLUÍDO</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
        <View>
            <View style={styles.icon}>
                <Icon name="check" type="FontAwesome" size={70} color="darkgreen"/>
            </View>
            <Divider style={styles.divider}></Divider>
            <TouchableOpacity key={dados.id_pedido}>
                <Text style={styles.itemText}>{dados.nome}</Text>
                <Text style={styles.itemData}>Pedido {dados.id_pedido} • {dados.data_pedido}</Text>
                {
                dados.whatsapp === true && 
                <Text style={styles.itemDescription}>TOQUE PARA SER REDIRECIONADO AO WHATSAPP DESSE {prestador ? 'CLIENTE' : 'ESTABELECIMENTO'}</Text>
                }
                {
                dados.whatsapp === false && 
                <Text style={styles.itemDescription}>ESSE {prestador ? 'CLIENTE' : 'ESTABELECIMENTO'} NÃO CONECTOU UM NÚMERO DE WHATSAPP, ENTRE EM CONTATO POR LIGAÇÃO: {item.telefone}</Text>
                }
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <View style={styles.row}>
                <View style={styles.containerBotao}>
                <TouchableOpacity onPress={() => ''} style={styles.continuarBtn}>
                    <Text style={styles.buttonText} accessible={true} accessibilityLabel="botao-continuar">CONTINUAR</Text>
                </TouchableOpacity>
                </View>
            </View>
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
  icon: {
    alignItems: 'center'
  },
  containerBotao: {
    width: '80%',
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  continuarBtn: {
    width: '60%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004A5A'
  },
  buttonText: {
    color: 'white'
  }
});

export default AgendamentoConcluido;