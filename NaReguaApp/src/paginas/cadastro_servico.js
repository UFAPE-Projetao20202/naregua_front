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

const CadastroServico = () => {
	const [nome, setNome] = useState('');
	const [valor, setValor] = useState(0);
	const [duracao, setDuracao] = useState(0);
	const [descricao, setDescricao] = useState('');
	const [apiError, setApiError] = useState('');

	useEffect(() => {
	}, []);

	async function cadastrar() {
		try {
			let categoriaId;
			let resCategorias = await api.get(`/categories`);

			if(resCategorias.data.length > 0) {
				categoriaId = resCategorias.data[0].id;
			} else {
				let dataCategoria = JSON.stringify({description: 'Categoria 1'});
				let resPost = await api.post(`/categories`, dataCategoria);
				categoriaId = resPost.data.id;
			}

            let data = JSON.stringify({
                name: nome,
                value: valor,
                duration: duracao,
				description: descricao,
				discount: 0,
				available: true,
				category_id: categoriaId // corrigir após adicionar cadastro de categoria
			});

			await api.post(`/services`, data);

			setApiError('');
            alert('Serviço cadastrado!');
		} catch (error) {
			console.log(error.response.data);
			setApiError(error.response.data.message);
		}
	}

	function validarDados() {
		if (nome.length >= 3 &&
			valor > 0 &&
            duracao > 0 &&
            descricao.length >= 3) {
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
								placeholder="Corte de cabelo"
								placeholderTextColor="grey"
								onChangeText={(nome) => setNome(nome)}
							/>
						</View>
					</View>

					<View style={styles.rowContainer}>
						<View style={styles.label}>
							<Text style={styles.labelText}>Valor: </Text>
						</View>
						<View style={styles.inputViewSmall}>
							<TextInput
								style={styles.textInput}
								placeholder="50,00"
								placeholderTextColor="grey"
								keyboardType="decimal-pad"
								onChangeText={(valor) => setValor(valor)}
							/>
						</View>
						
						<View style={styles.label}>
							<Text style={styles.labelText}>Duração média: </Text>
						</View>
						<View style={styles.inputViewSmall}>
							<TextInput
								style={styles.textInput}
								placeholder="15min"
								placeholderTextColor="grey"
								keyboardType="number-pad"
								onChangeText={(duracao) => setDuracao(duracao)}
							/>
						</View>
					</View>

					<View style={styles.labelDescription}>
						<Text style={styles.labelText}>Descrição: </Text>
					</View>
					<View style={styles.inputBlock}>
						<TextInput
							style={styles.textBlock}
							placeholder="Adicione uma descrição"
							placeholderTextColor="grey"
							multiline
							maxLength={100}
							numberOfLines={3}
							onChangeText={(decricao) => setDescricao(decricao)}
						/>
					</View>
				</View>

				{apiError.length > 0 && <Text style={styles.error}>{apiError}</Text>}

				<View style={styles.containerBtn}>
					<TouchableOpacity style={styles.signBtn} onPress={() => validarDados()}>
						<Text style={styles.signText}>Concluir</Text>
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
		width: "25%",
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
export default CadastroServico;