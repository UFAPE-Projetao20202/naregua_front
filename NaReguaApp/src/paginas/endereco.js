import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import api from '../services/api';
import { useAuth } from '../contexts/auth';

const Endereco = ({ navigation })  => {
  const { user } = useAuth();
  
  const [listaEnderecos, setlistaEnderecos] = useState([]);

  /*useEffect(() => {
    listarEnderecos();
  }, []);*/

  /*async function listarEnderecos() {
    try {
      let res1 = await api.get('/users/address');
      setlistaEnderecos(res1.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }*/

  return (
    <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
      <View style={styles.container}>
        {user && <Text style={styles.title}>Bem vindo, {user.name}</Text>}
        {listaEnderecos.map((item) => (
          <View style={styles.itemLista} key={item.id}>
            <View style={styles.itemColunas}>
              <View>
                <Text style={styles.itemTitulo}>{item.name}</Text>
                <Text style={styles.itemDados}>{item.street}</Text>
                <Text style={styles.itemDados}>{item.state}</Text>
                <Text style={styles.itemDados}>{item.complement}</Text>
              </View>
            <Divider style={styles.divisor} />
          </View>
          </View>
        ))}
        <View style={styles.containerBtn}>
								<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('CadastroEndereco')}>
								<Text style={styles.btnText} accessible={true} accessibilityLabel="botao-criarendereco">Adicionar endereço</Text>
								</TouchableOpacity>
								
            </View>
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
  itemLista: {
    width: "85%",
    marginBottom: 20
  },
  itemTitulo: {
    color: 'black',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500'
  },
  itemDados: {
    color: '#5A5A5A',
    textAlign: 'left'
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
  },
  title: {
		color: 'black',
		fontSize: 20,
		fontWeight: '500'
	},
  containerBtn: {
		width: '80%',
		flex: 1,
		marginTop: 20,
		alignItems: 'center'
	},btnText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	signBtn: {
		width: 240,
		borderRadius: 15,
		padding: 10,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#004A5A'
	}
});

export default Endereco;