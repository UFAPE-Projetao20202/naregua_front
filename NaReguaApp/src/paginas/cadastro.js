import React, { useEffect, useState } from 'react';
import {
	View,
	ScrollView,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import api from '../services/api';


const Cadastro = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [nome, setNome] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmSenha, setConfirmSenha] = useState('');
	const [celular, setCelular] = useState('');
	const [tipoUsuario, setTipoUsuario] = React.useState('Cliente');
	const [tipoServico, setTipoServico] = useState('Selecione uma opção');
	const [apiError, setApiError] = useState('');

	useEffect(() => {
	}, []);

	async function cadastrar() {
		try {
            let data = JSON.stringify({
				name: nome,
				email: email,
				phone: celular,
				password: senha
			});

			let endpoint = tipoUsuario === 'Cliente' ? 'users' : 'providers';
			let res = await api.post(`/${endpoint}`, data);

			console.log(res.data);
			navigation.navigate('Login');
		} catch (error) {
			console.log(error.response.data);
			setApiError(error.response.data.message);
		}
	}

	function validarDados() {
		if (senha === confirmSenha &&
			senha.length >= 6 &&
			nome.length >= 3 &&
			email.length >= 3 &&
			celular.length >= 8) {
			cadastrar();
			return;
		}
		setApiError('Preencha todos os campos corretamente');
	}

	return (
		<ScrollView contentContainerStyle={styles.scrollViewcontainer}>
			<View style={styles.container}>
				<View style={styles.label}>
					<Text style={styles.labelText}>Nome</Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="João Silva"
						placeholderTextColor="grey"
						onChangeText={(nome) => setNome(nome)}
						accessible={true} accessibilityLabel="campo-nome"
					/>
				</View>

				<View style={styles.label}>
					<Text style={styles.labelText}>E-mail</Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="exemplo@email.com"
						placeholderTextColor="grey"
						keyboardType="email-address"
						onChangeText={(email) => setEmail(email)}
						accessible={true} accessibilityLabel="campo-email"
					/>
				</View>

				<View style={styles.label}>
					<Text style={styles.labelText}>Senha</Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="******"
						placeholderTextColor="grey"
						secureTextEntry={true}
						onChangeText={(senha) => setSenha(senha)}
						accessible={true} accessibilityLabel="campo-senha"
					/>
				</View>

				<View style={styles.label}>
					<Text style={styles.labelText}>Confirmar Senha</Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="******"
						placeholderTextColor="grey"
						secureTextEntry={true}
						onChangeText={(confirmSenha) => setConfirmSenha(confirmSenha)}
						accessible={true} accessibilityLabel="campo-confirmarSenha"
					/>
				</View>

				<View onChange={event => this.setTipoUsuario(event)} style={styles.radioButton}>
					<RadioButton
						value="Cliente" color="#004A5A"
						status={tipoUsuario === 'Cliente' ? 'checked' : 'unchecked'}
						onPress={() => setTipoUsuario('Cliente')}
					/>
					<View style={styles.label}>
						<Text style={styles.labelText}>Cliente</Text>
					</View>
				</View>
				<View onChange={event => this.setTipoUsuario(event)} style={styles.radioButton}>
					<RadioButton
						value="Prestador" color="#004A5A"
						status={tipoUsuario === 'Prestador' ? 'checked' : 'unchecked'}
						onPress={() => setTipoUsuario('Prestador')}
						accessible={true} accessibilityLabel="campo-prestador"
					/>
					<View style={styles.label}>
						<Text style={styles.labelText}>Prestador</Text>
					</View>
				</View>

				<View style={styles.label}>
					<Text style={styles.labelText}>Nº de celular</Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="(99) 9999 9999"
						placeholderTextColor="grey"
						keyboardType="number-pad"
						onChangeText={(celular) => setCelular(celular)}
						accessible={true} accessibilityLabel="campo-celular"
					/>
				</View>

				<View style={tipoUsuario === 'Prestador' ? styles.label : styles.hide}>
					<Text style={styles.labelText} accessible={true} accessibilityLabel="campo-servico">Tipo de Serviço</Text>
				</View>
				<View style={tipoUsuario === 'Prestador' ? styles.pickerContainer : styles.hide}>
					<Picker
						style={styles.pickerInput}
						dropdownIconColor="black"
						selectedValue={tipoServico}
						mode="dropdown"
						accessible={true} accessibilityLabel="campo-tiposervico"
						onValueChange={(itemValue, itemIndex) =>
							setTipoServico(itemValue)
						}>
						<Picker.Item label="Barbeiro(a)" value="Barbeiro" />
						<Picker.Item label="Manicure" value="Manicure" />
						<Picker.Item label="Cabelereiro(a)" value="Cabelereiro" />
						<Picker.Item label="Maquiador(a)" value="Maquiador" />
						<Picker.Item label="Designer de Sobrancelhas" value="designer de Sobrancelhas" />
						<Picker.Item label="Massagista" value="Massagista" />
					</Picker>
				</View>

				{apiError.length > 0 && <Text style={styles.error}>{apiError}</Text>}

				<View style={styles.containerBtn}>
					<TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('Login')}>
						<Text style={styles.signText} accessible={true} accessibilityLabel="botao-cadastrar">CADASTRAR</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollViewcontainer: {
        backgroundColor: '#ECECEC',
        paddingVertical: 20,
        height: '100%',
        paddingHorizontal: 15
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	inputView: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 45,
        width: '90%',
        marginVertical: 10
	},
	textInput: {
        height: 50,
        flex: 1,
        marginLeft: 20,
        color: 'black'
	},
	pickerContainer: {
		backgroundColor: 'white',
		borderRadius: 15,
		width: "90%",
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		marginVertical: 10
	},
	pickerInput: {
		color: 'black',
		backgroundColor: 'white',
		borderRadius: 50,
		width: "100%",
		marginLeft: 20,
		height: 45
	},
	signBtn: {
		width: 140,
		borderRadius: 15,
		padding: 10,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#004A5A'
	},
	signText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	label: {
        marginTop: 5,
        width: '90%'
	},
	labelText: {
		color: 'black',
		textAlign: 'left'
	},
	error: {
		color: 'red'
	},
	containerBtn: {
		width: '80%',
		flex: 1,
		marginTop: 20,
		alignItems: 'center'
	},
	radioButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10
	},
	hide: {
		display: 'none'
	}
});
export default Cadastro;