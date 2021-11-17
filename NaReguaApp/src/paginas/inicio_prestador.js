import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useAuth } from '../contexts/auth';

const InicioPrestador = ({ navigation }) => {
	const { user } = useAuth();

    return (
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
            <View style={styles.container}>
				{user && <Text style={styles.title}>Bem vindo, {user.name}</Text>}

                <View style={styles.containerBtn}>
					<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('CadastroServico')}>
						<Text style={styles.btnText} accessible={true} accessibilityLabel="botao-criarservico">Criar serviço</Text>
					</TouchableOpacity>
				</View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
	scrollViewcontainer: {
        flex: 1,
		backgroundColor: '#ECECEC',
        paddingVertical: 20
	},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
	title: {
		color: 'black',
		fontSize: 20,
		fontWeight: '500'
	},
	containerBtn: {
		width: '80%',
		flex: 1,
		marginTop: 20,
		alignItems: 'center'
	},
	btnText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	signBtn: {
		width: 140,
		borderRadius: 15,
		padding: 10,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#004A5A'
	}
  });

export default InicioPrestador;