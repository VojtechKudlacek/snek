interface SocketReducerState {
	loading: boolean;
	connected: boolean;
	error: string;
}

interface PlayerReducerState {
	name: string;
}

interface StoreState {
	socket: SocketReducerState;
	player: PlayerReducerState;
}
