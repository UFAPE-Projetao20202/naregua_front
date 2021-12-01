import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ListaNotificacoes = ({ navigation })  => {
  const [listaNotificacoes, setlistaNotificacoes] = useState([]);

  useEffect(() => {
    setlistaNotificacoes(
        [
          {
              id: 1,
              titulo: "Titulo notificação 1",
              lida: true
          },
          {
              id: 2,
              titulo: "Titulo notificação 2",
              lida: false
          },
          {
              id: 3,
              titulo: "Titulo notificação 3",
              lida: true
          }
      ]
    );
  }, []);

  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>Notificações</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      {listaNotificacoes.map((item) => (
          <View key={item.id}>
            <TouchableOpacity style={styles.item} onPress={() => {}}>
                <Text style={styles.itemText}>{item.titulo}</Text>
                {item.lida === false &&
                    <Icon name="circle" type="FontAwesome" size={18} color="firebrick"/> 
                }
            </TouchableOpacity>
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
  itemText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500'
  },
  item: {
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 5,
    justifyContent: 'space-between'
  }
});

export default ListaNotificacoes;