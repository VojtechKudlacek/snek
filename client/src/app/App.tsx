import React, { StrictMode, FunctionComponent, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import socketManager from 'services/SocketManager';
import Game from 'components/Game';
import Overlay from 'components/Overlay';

const App: FunctionComponent = () => {
	useEffect(socketManager.connect, []);

	return (
		<StrictMode>
			<Provider store={store}>
				<Overlay>
					<Game />
				</Overlay>
			</Provider>
		</StrictMode>
	);
};

export default App;
