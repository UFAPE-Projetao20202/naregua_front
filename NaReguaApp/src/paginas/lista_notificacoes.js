import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const ListaNotificacoes = ({ navigation })  => {
  let prestador = true;
  const [listaNotificacoes, setlistaNotificacoes] = useState([]);

  useEffect(() => {
    setlistaNotificacoes(
        [
          {
              id: 1,
              titulo: "Titulo notificação 1",
              texto: "fjskmldfk fnddfmk fdmkdfkfdjkf jfdkdfjd jfdmdf kjdmdfkjdf kjfdmdmfk",
              lida: true
          },
          {
              id: 2,
              titulo: "Titulo notificação 2",
              texto: "fjskmldfk fnddfmk fdmkdfkfdjkf jfdkdfjd jfdmdf kjdmdfkjdf kjfdmdmfk",
              lida: false
          },
          {
              id: 3,
              titulo: "Titulo notificação 3",
              texto: "fjskmldfk fnddfmk fdmkdfkfdjkf jfdkdfjd jfdmdf kjdmdfkjdf kjfdmdmfk",
              lida: true
          }
      ]
    );
  }, []);

  return (
  <View style={styles.container}>
    <ScrollView style={styles.content}>
      <View style={styles.row}>
        <Icon name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
        <Text style={styles.pageTitle}>Notificações</Text>
      </View>
      <Divider style={styles.dividerHeader}></Divider>
      {listaNotificacoes.map((item) => (
          <View key={item.id}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Notificacao', {notificacao: item})}>
                <Text style={styles.itemText}>{item.titulo}</Text>
                {item.lida === false &&
                    <Icon name="circle" type="FontAwesome" size={18} color="firebrick"/> 
                }
            </TouchableOpacity>
            <Divider style={styles.divider} />
          </View>
        ))}
    </ScrollView>
    {prestador == false &&
      <View style={styles.appFooter}>
        <Divider style={styles.divider}></Divider>
        <View style={styles.appFooterRow}>
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('InicioCliente')}>
            <Icon name="home" type="FontAwesome" size={27} color="grey"/>
            <Text style={styles.appFooterText}>Início</Text>
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
    }
    {prestador == true &&
    		<View style={styles.appFooter}>
        <Divider style={styles.divider}></Divider>
        <View style={styles.appFooterRow}>
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('InicioPrestador')}>
          <Icon name="home" type="FontAwesome" size={27} color="grey"/>
          <Text style={styles.appFooterText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
          <Icon name="store" type="MaterialIcons" size={27} color="grey"/>
          <Text style={styles.appFooterText}>Minha Loja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PedidosPrestador')}>
          <Icon name="dollar" type="FontAwesome" size={23} color="grey"/>
          <Text style={styles.appFooterText}>Histórico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PerfilPrestador')}>
          <Icon name="user" type="FontAwesome" size={24} color="grey"/>
          <Text style={styles.appFooterText}>Perfil</Text>
          </TouchableOpacity>
        </View>
        </View>
    }
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
  }
});

export default ListaNotificacoes;