import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import api from '../services/api';
import { useAuth } from '../contexts/auth';


const Loja = ({ navigation, route })  => {
  const { user } = useAuth();
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
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>Loja {prestador.name}</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      <View style={styles.row}>
        <Text style={styles.pageTitle}>Meus Serviços</Text>
      </View>
      <Divider style={styles.divisor} />
      <ScrollView >
      {listaServ.map((item) => (
        <View style={styles.itemLista} key={item.id}>
            {prestador.id === item.provider.id?
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
              </View> :null
              }
        </View>
      ))}
      </ScrollView>
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

export default Loja;