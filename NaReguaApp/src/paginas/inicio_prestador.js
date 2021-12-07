import React from 'react';
import { Divider } from 'react-native-paper';
import Icon from "react-native-dynamic-vector-icons";
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
	<View style={styles.container}>
		<ScrollView style={styles.content}>
			<Text style={styles.text}>Bem Vindo!</Text>
		</ScrollView>
		<View style={styles.appFooter}>
		<Divider style={styles.divider}></Divider>
		<View style={styles.appFooterRow}>
		  <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
			<Icon name="home" type="FontAwesome" size={27} color="black"/>
			<Text style={styles.appFooterTextActive}>Início</Text>
		  </TouchableOpacity>
		  <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
			<Icon name="store" type="MaterialIcons" size={27} color="grey"/>
			<Text style={styles.appFooterText}>Minha Loja</Text>
		  </TouchableOpacity>
		  <TouchableOpacity style={styles.appFooterIcon} onPress={() => ''}>
			<Icon name="dollar" type="FontAwesome" size={23} color="grey"/>
			<Text style={styles.appFooterText}>Histórico</Text>
		  </TouchableOpacity>
		  <TouchableOpacity style={styles.appFooterIcon} onPress={() => navigation.navigate('PerfilPrestador')}>
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
	  },
	  text: {
		  color: 'black',
		  fontSize: 20,
		  fontWeight: 'bold'
	  }
});

export default InicioPrestador;