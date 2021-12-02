import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Favoritos = ({ navigation })  => {
  const [listaFavoritos, setlistaFavoritos] = useState([]);

  useEffect(() => {
    setlistaFavoritos(
        [
          {
              id: 1,
              nome: "Nome"
          },
          {
              id: 2,
              nome: "Nome"
          },
          {
              id: 3,
              nome: "Nome"
          }
      ]
    );
  }, []);

  return (

  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>Favoritos</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      {listaFavoritos.map((item) => (
          <View style={styles.itemLista} key={item.id}>
            <View style={styles.column}>
              <View>
                <Text style={styles.itemText}>{item.nome}</Text>
                <Text style={styles.itemDescription}>1,7 km</Text>
                <Text style={styles.itemDescription}>Descrição do prestador</Text>
              </View>
              <View>
                <View style={styles.itemLinha}>
                  <Icon name="star" type="FontAwesome" size={15} color="#DE7800" onPress={() => {}} />
                  <Text style={styles.itemNota}>4.5</Text>
                </View>
                <Icon name="heart" type="FontAwesome" size={24} color="black" onPress={() => {}} />
              </View>
            </View>
            <Divider style={styles.divider} />
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
  column: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  itemText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500'
  },
  itemDescription: {
    marginVertical: 2,
    fontSize: 16,
    color: 'grey',
  },
  itemLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  itemNota: {
    color: '#DE7800',
    fontWeight: '500'
  }
});

export default Favoritos;