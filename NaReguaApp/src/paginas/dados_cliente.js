import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { useAuth } from '../contexts/auth';


const DadosCliente = ({ navigation })  => {
  const { user } = useAuth();

  return (
  <View style={styles.container}>
    <View style={styles.content}>
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
});

export default DadosCliente;