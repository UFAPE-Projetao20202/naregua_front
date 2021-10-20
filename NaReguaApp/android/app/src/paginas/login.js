import React from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
// import FlexView from 'react-flexview';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
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
            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    image: {
        flex: 1,
        marginBottom: 4,
        resizeMode: 'contain',
        width: '100%'
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
        flex: 1,
        marginBottom: 7,
        width: '70%'
    },
    labelText: {
        color: 'black',
        textAlign: 'left'
    },
    containerBotao: {
        width: '80%',
        flex: 1,
        marginTop: 20,
        alignItems: 'flex-end'
    }
  });

export default Login;