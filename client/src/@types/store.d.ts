interface SocketReducerState {
	loading: boolean;
	error: string;
}

interface PlayerReducerState {
	name: string;
}

interface StoreState {
	socket: SocketReducerState;
	player: PlayerReducerState;
}
