import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isProvider, setIsProvider] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarStorage() {
      const storageUser = await AsyncStorage.getItem('user');
      const storageToken = await AsyncStorage.getItem('token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setIsProvider(storageUser.is_provider);
        api.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`;
      }
      setLoading(false);
    }

    carregarStorage();
  }, []);

  async function login(data) {
    try {
      setLoading(true);
      let res = await api.post('/login', data);

      let { token } = res.data;
      let responseUser = res.data.user;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(responseUser));

      setUser(responseUser);
      setIsProvider(responseUser.is_provider);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.response) {
        setMensagemErro(error.response.data.message);
      }
    }
  }

  return (
    <AuthContext.Provider value={{ logado: !!user, isProvider, user, loading, login, mensagemErro }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}