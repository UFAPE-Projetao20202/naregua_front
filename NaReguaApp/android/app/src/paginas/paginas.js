import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cadastro from './cadastro';
import Login from './login';

const Paginas = () => {
    return(
        <View style={styles.container}>
            <Login />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
});

export default Paginas;