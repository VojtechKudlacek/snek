import io from 'socket.io-client';
import store from 'store';
import config from 'config';
import { setLoading, setError } from 'store/actions/socket';
import EventEmitter from 'services/EventEmitter';

export class SocketManager {

	private socket!: SocketIOClient.Socket;

	private onConnecion(): void {
		store.dispatch(setError(''));
		store.dispatch(setLoading(false));
	}

	private onError(error: string): void {
		store.dispatch(setError(error));
	}

	public disconnect(): void {
		this.socket.disconnect();
	}

	public reconnect(): void {
		store.dispatch(setLoading(true));
		this.socket.connect();
	}

	public connect(): VoidFunction {
		store.dispatch(setLoading(true));
		this.socket.on('connect', this.onConnecion.bind(this));
		this.socket.on('error', this.onError.bind(this))
		this.socket = io({ port: config.socketPort });
		return this.disconnect.bind(this);
	}

}


const socketManager = new SocketManager();

export default socketManager;
