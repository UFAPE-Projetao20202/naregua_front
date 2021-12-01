import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Notificacao = ({ route, navigation })  => {
    const notificacao = route.params.notificacao;

  useEffect(() => {
  }, []);

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>Notificação</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{notificacao.titulo}</Text>
            <Text style={styles.itemText}>{notificacao.texto}</Text>
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
  dividerHeader: {
    marginVertical: 10
  },
  divider: {
    marginVertical: 10
  },
  itemTitle: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10
  },
  item: {
    flexDirection: 'column',
    marginHorizontal: 5,
  }
});

export default Notificacao;