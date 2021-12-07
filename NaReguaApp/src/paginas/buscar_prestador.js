import React, {useState} from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
import {
    ScrollView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import api from '../services/api';

const BuscarPrestador = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [listaPrestadores, setListaPrestadores] = useState([]);

    async function buscar(){
        try{
            let nameData = JSON.stringify({name: nome});
            let lista = await api.post('/providers/searchProvider', nameData);
            setListaPrestadores(lista.data);
        } catch (error) {
          console.log(error.response.data);
        }
    }

    function buscarPrestador() {
        buscar();
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Buscar prestador"
                        inlineImageLeft='search_icon'
                        onChangeText={(nome) => setNome(nome)}
                    />
                </View>

                <View style={styles.containerBtn}>
                    <TouchableOpacity onPress={() => buscarPrestador()} style={styles.buscarBtn}>
                        <Text style={styles.btnText} >BUSCAR</Text>
                    </TouchableOpacity>
                </View>

                {listaPrestadores.map((item) => (
                  <View style={styles.itemLista} key={item.id}>
                    <View style={styles.itemColunas}>
                      <View>
                        <Text style={styles.itemTitulo}>
                            {item.user.name}
                        </Text>
                        <Text style={styles.itemDados}>Descrição do prestador .... </Text>
                      </View>

                      <TouchableOpacity onPress={() => navigation.navigate('ListarServicosPrestador', {prestador: item})} style={styles.buscarBtn}>
                          <Text style={styles.btnText} >Listar Serviços</Text>
                      </TouchableOpacity>
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
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ECECEC',
        paddingVertical: 26,
        paddingHorizontal: 4
    },
    container: {
        alignItems: 'center',
        height: '100%',
        width: '100%'
      },
    containerBtn: {
        width: '100%',
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
      },
    inputView: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: "90%",
        height: 45,
        alignItems: 'flex-start',
        marginBottom: 20
    },
    textInput: {
        height: 50,
        width: '40%',
        //alignItems: 'flex-start',
        color: 'black'
    },
    buscarBtn: {
        width: '25%',
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#004A5A'
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
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
});

export default BuscarPrestador;