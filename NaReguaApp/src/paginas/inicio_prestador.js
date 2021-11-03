import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const InicioPrestador = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
            <View style={styles.container}>
                <View style={styles.containerBtn}>
					<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('CadastroServico')}>
						<Text style={styles.btnText}>Criar serviço</Text>
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