interface SocketReducerState {
	loading: boolean;
	connected: boolean;
}

interface StoreState {
	socket: SocketReducerState;
}
