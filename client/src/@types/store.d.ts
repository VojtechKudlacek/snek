interface ReducerAction {
	type: string;
	payload?: any;
}

interface SocketReducerState {
	loading: boolean;
}
