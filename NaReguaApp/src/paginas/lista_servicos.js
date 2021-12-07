import React, {useState, useEffect} from 'react';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-dynamic-vector-icons";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const ListaServicos = () => {
  const [listaServ, setlistaServicos] = useState([]);
  const [prestador, setPrestador] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    listarServicos();
  }, []);

  async function listarServicos() {
    // try {
    //   let res1 = await api.get('/providers');
    //   setlistaServicos(res1.data);
    // } catch (error) {
    //   console.log(error.response.data);
    // }
    let prest = {
      id: '1',
      name: 'Nome do Prestador'
    };
    setPrestador(prest);

    let lista = 
    [
        {
            id: '1',
            name: 'Nome Servico 1',
            description: 'Descrição do servico 1...',
            value: '46,99',
            duration: '120',
            discount: '0',
            available: true,
            category_id: '1'
        },
        {
            id: '2',
            name: 'Nome Servico 2',
            description: 'Descrição do servico 2...',
            value: '54,00',
            duration: '30',
            discount: '0',
            available: true,
            category_id: '1'
        },
        {
            id: '3',
            name: 'Nome Servico 3',
            description: 'Descrição do servico 3...',
            value: '45,60',
            duration: '90',
            discount: '0',
            available: true,
            category_id: '2'
        },
        {
            id: '4',
            name: 'Nome Servico 4',
            description: 'Descrição do servico 4...',
            value: '12,00',
            duration: '90',
            discount: '0',
            available: true,
            category_id: '2'
        },
        {
            id: '5',
            name: 'Nome Servico 5',
            description: 'Descrição do servico 5...',
            value: '12,50',
            duration: '35',
            discount: '0',
            available: true,
            category_id: '3'
        },
    ];

    const categorias = [];
    lista.map(servico => {
        if (categorias.indexOf(servico.category_id) === -1) {
            categorias.push(servico.category_id);
        }
    });
    let Listagem = [];
    categorias.forEach(categoria => {
        var itens = lista.flatMap(servico => servico.category_id === categoria ? servico : [])
        Listagem.push({title: categoria, data: itens});
    }, []);
    setlistaServicos(Listagem);
  }

  const Item = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Servico', {servico: item})} style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.duration} min • R$ {item.value}</Text>
      </TouchableOpacity>
      <Divider style={styles.divisor} />
    </View>
  );
  
  const Title = ({ title }) => (
    <View>
      <View style={styles.item}>
        <Text style={styles.header}>{title}</Text>
      </View>
      <Divider style={styles.divisor} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.row}>
          <Icon style={styles.backButton} name="chevron-left" type="FontAwesome" size={18} color="black" onPress={() => {}} />
          <Text style={styles.pageTitle}>{prestador.name}</Text>
        </View>
        <Divider style={styles.divisor} />
        <SectionList
          sections={listaServ}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Title title={title}/>
          )}
        />
      </ScrollView>
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
  item: {
    marginVertical: 10
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

export default ListaServicos;