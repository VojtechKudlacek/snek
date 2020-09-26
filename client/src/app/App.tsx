import React, { StrictMode, FunctionComponent, useEffect } from 'react';
import { Provider } from 'react-redux';
import socketManager from 'services/SocketManager';
import store from 'store';

const App: FunctionComponent = () => {
	useEffect(socketManager.connect, []);

	return (
		<StrictMode>
			<Provider store={store}>
				<div
					className="kekw"
				/>
			</Provider>
		</StrictMode>
	);
};

export default App;
