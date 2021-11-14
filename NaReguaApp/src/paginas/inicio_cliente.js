import React from 'react';
import { Divider } from 'react-native-paper';
import { FaStar } from "react-icons/fa";
import {
    View,
    ScrollView,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

const InicioCliente = ({ navigation }) => {
    const listaPrestadores = [
        {
            id: '1',
            nome: 'Nome Prestador 1',
            distancia: '4,3 km',
            descricao: 'Descrição do prestador 1...',
            nota: '4,8'
        },
        {
            id: '2',
            nome: 'Nome Prestador 2',
            distancia: '2,2 km',
            descricao: 'Descrição do prestador 2...',
            nota: '4,3'
        },
        {
            id: '3',
            nome: 'Nome Prestador 3',
            distancia: '1,7 km',
            descricao: 'Descrição do prestador 3...',
            nota: '3,9'
        },
      ];
    return (
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
            <View style={styles.container}>
                {listaPrestadores.map((item) => (
                    <View style={styles.itemLista} key={item.id}>
                        <View style={styles.itemColunas}>
                            <View>
                                <Text style={styles.itemTitulo}>{item.nome}</Text>
                                <Text style={styles.itemDados}>{item.distancia}</Text>
                                <Text style={styles.itemDados} accessible={true} accessibilityLabel="descricao-prestador">{item.descricao}</Text>
                            </View>
                            <View style={styles.itemCol2}>
                                <Text style={styles.itemNota}>{item.nota}</Text>
                            </View>
                        </View>
                        <Divider style={styles.divisor}/>
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