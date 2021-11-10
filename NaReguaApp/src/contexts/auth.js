import React, { createContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isProvider, setIsProvider] = useState(false);
	const [mensagem, setMensagem] = useState('');
	
	async function login(data) {
		try {
			let res = await api.post('/login', data);

			let { token } = res.data;
			setUser(res.data.user);

			api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

			setIsProvider(user.isProvider);
			return mensagem;
		} catch (error) {
			console.log(error.response.data);
			setMensagem(error.response.data.message);
			return mensagem;
		}
	}
	
	return (
		<AuthContext.Provider value={{ logado: !!user, isProvider, user, login }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext;