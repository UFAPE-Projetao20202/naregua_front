import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import AppClienteRoute from './app-cliente.routes';
import AppPrestadorRoute from './app-prestator.routes';
import AuthRoute from './auth.routes';

function Routes() {
	const { logado, isProvider, loading } = useAuth();

	if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666" />
			</View>
		)
	}

	return (
		<>
			{logado ?
				<>
					{isProvider ? <AppClienteRoute /> : <AppPrestadorRoute />}
				</>
				: <AuthRoute />
			}
		</>
	);
}

export default Routes;