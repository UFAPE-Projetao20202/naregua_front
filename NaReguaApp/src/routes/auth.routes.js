import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../paginas/cadastro';
import Login from '../paginas/login';

const AuthStack = createNativeStackNavigator();

function AuthRoute() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <AuthStack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  );
}

export default AuthRoute;