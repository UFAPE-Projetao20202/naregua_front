import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const PedidosCliente = ({ navigation })  => {
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    listarPedidos();
  }, []);

  async function listarPedidos() {
      setListaPedidos(
          [
              {
                  nome_prestador: 'Nome prestador',
                  pedido_id: '783943893',
                  data: '12/12/21',
                  passou: false,
                  valor: '75,00',
                  avaliado: false,
                  avaliacao: 0,
                  confirmado: false,
                  cancelado: false                  
              },
              {
                nome_prestador: 'Nome prestador',
                pedido_id: '783954893',
                data: '10/12/21',
                passou: false,
                valor: '23,00',
                avaliado: true,
                avaliacao: 4,
                confirmado: true,
                cancelado: false 
              },
              {
                nome_prestador: 'Nome prestador',
                pedido_id: '783954893',
                data: '02/04/21',
                passou: true,
                valor: '23,00',
                avaliado: true,
                avaliacao: 2,
                confirmado: true,
                cancelado: false 
              },
              {
                nome_prestador: 'Nome prestador',
                pedido_id: '584954893',
                data: '02/12/21',
                passou: true,
                valor: '34.00',
                avaliado: false,
                avaliacao: 4,
                confirmado: true,
                cancelado: false 
              }
          ]
      );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.pageTitle}>HISTÓRICO</Text>
        </View>
        <Divider style={styles.dividerHeader}></Divider>
        {listaPedidos.map((item) => (
        <View>
          <View style={styles.row}>
            <View style={styles.columnData}>
              <Text style={styles.itemText}>{item.nome_prestador}</Text>
              <Text style={styles.itemDescription}>{item.passou ? 'Ocorreu' : 'Ocorrerá'} em {item.data}</Text>
              <Text style={styles.itemDescription}>Valor: R$ {item.valor}</Text>
              {item.avaliado === false && <Text style={styles.itemRate} onPress={() => {}}>AVALIAR</Text>}
              {item.avaliado === true && 
                <View style={styles.rowRated}>
                  <Icon name="star" type="FontAwesome" size={16} color={item.avaliacao >= 1 ? "#DE7800" : "grey"}/>
                  <Icon name="star" type="FontAwesome" size={16} color={item.avaliacao >= 2 ? "#DE7800" : "grey"}/>
                  <Icon name="star" type="FontAwesome" size={16} color={item.avaliacao >= 3 ? "#DE7800" : "grey"}/>
                  <Icon name="star" type="FontAwesome" size={16} color={item.avaliacao >= 4 ? "#DE7800" : "grey"}/>
                  <Icon name="star" type="FontAwesome" size={16} color={item.avaliacao >= 5 ? "#DE7800" : "grey"}/>
                </View>
              }
            </View>
            <View style={styles.columnButtons}>
              <TouchableOpacity onPress={() => {}} style={item.confirmado? item.passou? styles.btnConfirmado : styles.btnCancelar : styles.btnConfirmar}>
                <Text style={item.confirmado? item.passou? styles.btnTextConfirmado : styles.btnText : styles.btnText}>{item.confirmado? item.passou? "CONFIRMADO" : "CANCELAR" : "CONFIRMAR"}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.btn}>
                <Text style={styles.btnText}>DETALHES</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    itemRate: {
      marginVertical: 2,
      marginHorizontal: 10,
      fontSize: 15,
      color: '#DE7800',
      fontWeight: 'bold'
    },
    rowRated: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 5,
      marginVertical: 2,
      alignItems: 'center',
      width: '60%'
    },
    columnData: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginHorizontal: 5,
      paddingRight: 15,
      width: '60%'
    },
    columnButtons: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginHorizontal: 5,
      width: '40%'
    },
    btn: {
      width: '80%',
      borderRadius: 15,
      height: 40,
      marginVertical: 5,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    btnConfirmado: {
      width: '80%',
      borderRadius: 15,
      height: 40,
      marginVertical: 5,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    btnConfirmar: {
      width: '80%',
      borderRadius: 15,
      height: 40,
      marginVertical: 5,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'darkgreen'
    },
    btnCancelar: {
      width: '80%',
      borderRadius: 15,
      height: 40,
      marginVertical: 5,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'firebrick'
    },
    btnText: {
      color: 'white'
    },
    btnTextConfirmado: {
      color: 'darkgreen',
      fontWeight: 'bold'
    }
  });

export default PedidosCliente;