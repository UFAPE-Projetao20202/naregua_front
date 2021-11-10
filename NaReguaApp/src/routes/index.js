import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AppClienteRoute from './app-cliente.routes';
import AppPrestadorRoute from './app-prestator.routes';
import AuthRoute from './auth.routes';

function Routes() {
	const { logado, isProvider } = useContext(AuthContext);

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