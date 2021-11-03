import React from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
	const [apiError, setApiError] = useState('');
    
    useEffect(() => {
        tryConnect()
    }, []);
    
    async function tryConnect() {
        const res = await api.get(`/`);
        console.log(res.data.status);
    }

	async function logar() {
		try {
            let data = JSON.stringify({
				email: email,
				password: senha
            });

			let res = await api.post(`/login`, data);

			console.log(res.data);
			navigation.navigate('InicioCliente');
		} catch (error) {
			console.log(error.response.data);
			setApiError(error.response.data.message);
		}
	}

	function validarDados() {
		if (senha.length >= 6 && email.length >= 3) {
			logar();
			return;
		}
		setApiError('Preencha todos os campos corretamente');
	}


    return (
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("NaReguaApp/android/app/src/assets/logo.png")}/>
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
                    />
                </View>

				{apiError.length > 0 && <Text style={styles.error}>{apiError}</Text>}

                <View style={styles.containerBotao}>
                    <TouchableOpacity onPress={() => validarDados()} style={styles.loginBtn}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.signupBtn}>
                    <Text style={styles.signupText}>Não tem uma conta ainda? Faça seu cadastro clicando aqui</Text>
                </TouchableOpacity>
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
    image: {
        marginBottom: 4,
        resizeMode: 'contain',
        width: '100%',
        height: 220
    },
    inputView: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: "80%",
        height: 45,
        marginBottom: 20
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: 'black'
    },
    loginBtn: {
        width: '40%',
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#004A5A'
    },
    loginText: {
        color: 'white'
    },
    label: {
        marginBottom: 7,
        width: '70%'
    },
    labelText: {
        color: 'black',
        textAlign: 'left'
    },
	error: {
		color: 'red'
	},
    containerBotao: {
        width: '80%',
        flex: 1,
        marginTop: 20,
        alignItems: 'flex-end'
    },
    signupBtn: {
        flex: 1,
        marginVertical: 40,
        marginHorizontal: 36
    },
    signupText: {
        flex: 1,
        textAlign: 'center',
        color: '#004A5A',
        fontWeight: '500'
    },
  });

export default Login;