import React, {useEffect, useState} from 'react';
import {
	View,
	ScrollView,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import api from '../services/api';
//import { useAuth } from '../contexts/auth';

const CadastroEndereco = () => {
	const [nome, setNome] = useState('');
	const [cep, setCep] = useState(0);
	const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
	const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
	const [apiError, setApiError] = useState('');

	//const { user } = useAuth();

	useEffect(() => {
	}, []);

	async function cadastrar() {
		try {
			let data = JSON.stringify({
      	name: nome,
        zip_code: cep,
        street: rua,
        neighborhood: bairro,
				city: cidade,
				state: estado,
        country: pais
			});

			let res = await api.post(`/clients/address`, data);

			console.log(res.data);

			setApiError('');
            alert('Endereço cadastrado!');
		} catch (error) {
			console.log(error.response.data);
			setApiError(error.response.data.message);
		}
	}

	function validarDados() {
		if (nome.length >= 3 &&
			cep.length == 8 &&
			rua.length >= 5 &&
			bairro.length >= 3 &&
			cidade.length >= 3 &&
			estado.length >= 2 &&
			pais.length >= 3) {
			cadastrar();
			return;
		}
		setApiError('Preencha todos os campos corretamente');
	}

	return (
		<ScrollView contentContainerStyle={styles.scrollViewcontainer}>
			<View style={styles.container}>
				<View>
					
				</View>
				<View style={styles.formContainer}>
					<View style={styles.rowContainer}>
						<View style={styles.label}>
							<Text style={styles.labelText}>Nome: </Text>
						</View>
						<View style={styles.inputView}>
							<TextInput
								style={styles.textInput}
								placeholder="Casa"
								placeholderTextColor="grey"
								onChangeText={(nome) => setNome(nome)}
								accessible={true} accessibilityLabel="campo-nome"
							/>
						</View>
					</View>

					<View style={styles.formContainer}>
					<View style={styles.rowContainer}>
						<View style={styles.label}>
							<Text style={styles.labelText}>CEP: </Text>
						</View>
						<View style={styles.inputViewSmall}>
							<TextInput
								style={styles.textInput}
								placeholder="00000-000"
								placeholderTextColor="grey"
								keyboardType="decimal-pad"
								onChangeText={(cep) => setCep(cep)}
								accessible={true} accessibilityLabel="campo-cep"
							/>
						</View>
						</View>
						
          <View style={styles.rowContainer}>
					  <View style={styles.label}>
							<Text style={styles.labelText}>Rua: </Text>
						</View>
						<View style={styles.inputView}>
							<TextInput
								style={styles.textInput}
								placeholder="Rua João da Silva N 00 - Centro"
								placeholderTextColor="grey"
								onChangeText={(rua) => setRua(rua)}
								accessible={true} accessibilityLabel="campo-rua"
							/>
						</View>
					</View>

          <View style={styles.rowContainer}>
					  <View style={styles.label}>
							<Text style={styles.labelText}>Bairro: </Text>
						</View>
						<View style={styles.inputView}>
							<TextInput
								style={styles.textInput}
								placeholder="Proxima a xxxxxx"
								placeholderTextColor="grey"
								onChangeText={(bairro) => setBairro(bairro)}
								accessible={true} accessibilityLabel="campo-bairro"
							/>
						</View>
					</View>

            <View style={styles.label}>
							<Text style={styles.labelText}>Cidade: </Text>
						</View>
						<View style={styles.inputView}>
							<TextInput
								style={styles.textInput}
								placeholder="Nome da cidade"
								placeholderTextColor="grey"
								onChangeText={(cidade) => setCidade(cidade)}
								accessible={true} accessibilityLabel="campo-cidade"
							/>
						</View>

            <View style={styles.label}>
							<Text style={styles.labelText}>Estado: </Text>
						</View>
						<View style={styles.inputViewSmall}>
							<TextInput
								style={styles.textInput}
								placeholder="PE"
								placeholderTextColor="grey"
								onChangeText={(estado) => setEstado(estado)}
								accessible={true} accessibilityLabel="campo-estado"
							/>
						</View>
					</View>

          <View style={styles.label}>
							<Text style={styles.labelText}>Pais: </Text>
						</View>
						<View style={styles.inputViewSmall}>
							<TextInput
								style={styles.textInput}
								placeholder="Brasil"
								placeholderTextColor="grey"
								onChangeText={(pais) => setPais(pais)}
								accessible={true} accessibilityLabel="campo-pais"
							/>
						</View>
					</View>

					{apiError.length > 0 && <Text style={styles.error}>{apiError}</Text>}

				<View style={styles.containerBtn}>
					<TouchableOpacity style={styles.signBtn} onPress={() => validarDados()}>
						<Text style={styles.signText} accessible={true} accessibilityLabel="botao-concluir">Concluir</Text>
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
		paddingVertical: 26,
		paddingHorizontal: 4
	},
	container: {
		display: 'flex',
		alignItems: 'center',
    },
	formContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
    },
    rowContainer: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
    },
	inputView: {
		backgroundColor: 'white',
		borderRadius: 15,
		width: "85%",
		height: 40,
		marginBottom: 20
	},
	inputViewSmall: {
		backgroundColor: 'white',
		borderRadius: 15,
		width: "35%",
		height: 40,
		marginBottom: 20
	},
	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
        marginLeft: 8,
		color: 'black'
	},
	inputBlock: {
		backgroundColor: 'white',
		borderRadius: 15,
		width: "90%",
		marginBottom: 20
	},
	textBlock: {
		padding: 10,
		color: 'black'
	},
	pickerContainer: {
		backgroundColor: 'white',
		borderRadius: 15,
		width: "80%",
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		marginBottom: 20
	},
	pickerInput: {
		color: 'black',
		backgroundColor: 'white',
		borderRadius: 50,
		width: 280,
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
	labelDescription: {
		marginBottom: 7,
		alignSelf: 'flex-start',
		marginLeft: 20
	},
	label: {
		alignSelf: 'center',
		marginBottom: 22	
	},
	labelText: {
		fontWeight: '500',
		color: 'black'
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
		marginBottom: 20
	},
	hide: {
		display: 'none'
	}
});
export default CadastroEndereco;