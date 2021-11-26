import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import api from '../services/api';

const PerfilCliente = ({ navigation }) => {

  return (
    <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
      <View style={styles.container}>
            <View style={styles.itemColunas}>
              <View style={styles.containerBtn}>
								<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('Endereco')}>
								<Text style={styles.btnText} accessible={true} accessibilityLabel="botao-endereco">Endereços</Text>
								</TouchableOpacity>
							</View>
            </View>
            <Divider style={styles.divisor} />
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
  containerBtn: {
		width: '80%',
		flex: 1,
		marginTop: 20,
		alignItems: 'center'
	},
	btnText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	signBtn: {
		width: 140,
		borderRadius: 15,
		padding: 10,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#004A5A'
	}
});

export default PerfilCliente;