import io from 'socket.io-client';
import store from 'store';
import { setLoading, setConnected } from 'store/actions/socket';

export class SocketManager {

	private socket!: SocketIOClient.Socket;

	private onConnecion(): void {
		store.dispatch(setLoading(false));
		store.dispatch(setConnected(true));
	}

	private disconnect(): void {
		this.socket.disconnect();
	}

	public connect(): VoidFunction {
		store.dispatch(setLoading(true));
		this.socket.on('connect', this.onConnecion.bind(this));
		this.socket = io({ port: process.env.REACT_APP_SOCKET_PORT });
		return this.disconnect.bind(this);
	}

}


const socketManager = new SocketManager();

export default socketManager;
