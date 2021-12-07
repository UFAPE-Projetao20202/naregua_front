import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import api from '../services/api';
import { useAuth } from '../contexts/auth';

const InicioCliente = ({ navigation })  => {
  const { user } = useAuth();
  
  const [listaPrestadores, setlistaPrestadores] = useState([]);

  useEffect(() => {
    listarPrestadores();
  }, []);

  async function listarPrestadores() {
    try {
      let res1 = await api.get('/providers');
      setlistaPrestadores(res1.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
      <View style={styles.container}>
        {user && <Text style={styles.title}>Bem vindo, {user.name}</Text>}
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('PerfilCliente')}>
            <Text style={styles.btnText} accessible={true} accessibilityLabel="botao-perfilcliente">Perfil</Text>
          </TouchableOpacity>
		</View>

        <View style={styles.containerBtn}>
		<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('BuscarPrestador')}>
            <Text style={styles.btnText} >Buscar Prestador</Text>
          </TouchableOpacity>
        </View>

    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {listaPrestadores.map((item) => (
          <View style={styles.itemLista} key={item.id}>
            <View style={styles.itemColunas}>
              <View>
                <Text style={styles.itemTitulo}>{item.user.name}</Text>
                <Text style={styles.itemDados}>1,7 km</Text>
                <Text style={styles.itemDados}>Descrição do prestador</Text>
              </View>
              <View style={styles.itemCol2}>
                <View style={styles.itemLinha}>
                  <Icon name="star" type="FontAwesome" size={15} color="#DE7800" onPress={() => {}} />
                  <Text style={styles.itemNota}>4.5</Text>
                </View>
                <Icon name="heart" type="FontAwesome" size={24} color="black" onPress={() => {}} />
              </View>
            </View>
            <Divider style={styles.divisor} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.appFooter}>
        <Divider style={styles.divider}></Divider>
        <View style={styles.appFooterRow}>
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
            <Icon name="home" type="FontAwesome" size={27} color="black"/>
            <Text style={styles.appFooterTextActive}>Início</Text>
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
  itemLista: {
    width: "100%"
  },
  itemTitulo: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500'
  },
  itemDados: {
    color: 'grey',
    fontSize: 16
  },
  divisor: {
    marginVertical: 10
  },
  itemColunas: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  itemLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
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
		marginTop: 20,
		alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    signBtn: {
        width: 170,
        borderRadius: 15,
        padding: 10,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#004A5A'
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
  divider: {
    marginVertical: 10
  }
});

export default InicioCliente;