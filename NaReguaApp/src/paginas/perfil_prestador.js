import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import api from '../services/api';

const PerfilPrestador = ({ navigation }) => {

  return (
    <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
      <View style={styles.container}>
        {listaPrestadores.map((item) => (
          <View style={styles.itemLista} key={item.id}>
            <View style={styles.itemColunas}>
            <View style={styles.containerBtn}>
								<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('Endereco')}>
								<Text style={styles.btnText} accessible={true} accessibilityLabel="botao-endereco">Endereços</Text>
								</TouchableOpacity>
								</View>
            </View>
            <Divider style={styles.divisor} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewcontainer: {
    backgroundColor: '#ECECEC',
    paddingVertical: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  divisor: {
    marginTop: 10
  },
  itemColunas: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemNota: {
    color: '#DE7800',
    fontWeight: '500'
  }
});

export default PerfilPrestador;