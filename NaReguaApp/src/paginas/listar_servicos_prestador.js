import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-dynamic-vector-icons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity
} from 'react-native';
import api from '../services/api';

const ListaServicos = ({navigation, route}) => {
  const [listaServ, setlistaServicos] = useState([]);
  const prestador = route.params.prestador;

  useEffect(() => {
    listarServicos();
  }, []);

  async function listarServicos() {
    try  {
        let lista = await api.get('/services');
        setlistaServicos(lista.data);
    } catch (error){
        console.log(error.response.data);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>{prestador.user.name}</Text>
      </View>
      <Divider style={styles.divisor} />
      <ScrollView >
      {listaServ.map((item) => (
        <View style={styles.itemLista} key={item.id}>
          <View style={styles.itemColunas}>
            <Divider style={styles.divisor} />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Servico', {servico: item})} style={styles.item}>
                  <Text style={styles.header}>{item.name}</Text>
                  <Text style={styles.itemDescription}>Tipo: {item.category.description}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemDescription}>{item.duration} min • R$ {item.value}</Text>
              </TouchableOpacity>
            </View>
            <Divider style={styles.divisor} />
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewcontainer: {
      backgroundColor: '#ECECEC',
      paddingVertical: 20,
      height: '100%',
      paddingHorizontal: 15
    },
  container: {
    backgroundColor: '#ECECEC',
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 15
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
  item: {
    marginVertical: 20
  },
  header: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize',
    fontWeight: '500'
  },
  itemName: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize',
  },
  itemDescription: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'grey',
  },
  divisor: {
    marginVertical: 5
  },
  row: {
    flexDirection: 'row'
  },
  backButton: {
    textAlign: 'left',
    marginVertical: 14,
    width: "10%"
  }
});

export default ListaServicos;