import React, { useState, useEffect } from 'react';
import { Divider } from 'react-native-paper';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import api from '../services/api';

const InicioCliente = () => {
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
        {listaPrestadores.map((item) => (
          <View style={styles.itemLista} key={item.id}>
            <View style={styles.itemColunas}>
              <View>
                <Text style={styles.itemTitulo}>{item.user.name}</Text>
                <Text style={styles.itemDados}>1,7 km</Text>
                <Text style={styles.itemDados}>Descrição do prestador</Text>
              </View>
              <View style={styles.itemCol2}>
                <Text style={styles.itemNota}>4.5</Text>
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
  }
});

export default InicioCliente;