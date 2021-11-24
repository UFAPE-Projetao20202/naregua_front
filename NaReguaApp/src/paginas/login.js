import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import api from '../services/api';
import { useAuth } from '../contexts/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const { login, mensagemErro } = useAuth();
    
    useEffect(() => {
        tryConnect()
    }, []);
    
    async function tryConnect() {
        try{
            const res = await api.get('/');
            console.log(res.data.status);
        } catch (e) {
            console.log('Não foi possível conectar com a api', e)
        }
    }

	async function logar() {
        let data = JSON.stringify({
            email: email,
            password: senha
        });

        login(data);
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

				{mensagemErro.length > 0 && <Text style={styles.error}>{mensagemErro}</Text>}

                <View style={styles.containerBotao}>
                    <TouchableOpacity onPress={() => navigation.navigate('InicioCliente')} style={styles.loginBtn}>
                        <Text style={styles.loginText} accessible={true} accessibilityLabel="botao-login" >LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.signupBtn}>
                    <Text style={styles.signupText} accessible={true} accessibilityLabel="botao-cadastro">Não tem uma conta ainda? Faça seu cadastro clicando aqui</Text>
                </TouchableOpacity>
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
    image: {
        marginVertical: 5,
        resizeMode: 'contain',
        width: '100%',
        height: 220
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
        width: '90%'
    },
    labelText: {
        color: 'black',
        textAlign: 'left',
        marginTop: 10
    },
	error: {
		color: 'red'
	},
    containerBotao: {
        width: '90%',
        flex: 1,
        marginTop: 20,
        alignItems: 'flex-end'
    },
    signupBtn: {
        position: 'absolute',
        left: 15,
        bottom: 20,
        right: 15
    },
    signupText: {
        flex: 1,
        textAlign: 'center',
        color: '#004A5A',
        fontWeight: '500'
    },
  });

export default Login;