import io from 'socket.io-client';
import store from 'store';
import config from 'config';
import { setLoading, setError } from 'store/actions/socket';

export const EVENTS = {
	PING: 'ping',
	CONFIG: 'config',
	CREATE_PLAYER: 'createPlayer',
	NEW_PLAYER: 'newPlayer',
	CHANGE_DIRECTION: 'changeDirection',
	DEATH: 'death',
};

export class SocketManager {

	private socket!: SocketIOClient.Socket;
	private events: Map<String, Array<EventSubscriber>>;

	constructor() {
		this.events = new Map();
	}

	private onConnecion(): void {
		store.dispatch(setError(''));
		store.dispatch(setLoading(false));
	}

	private onError(error: string): void {
		store.dispatch(setError(error));
	}

	private onEvent(data: SocketEventData): void {
		const { name, payload } = data;
		this.dispatchEvent(name, payload);
	}

	private dispatchEvent(eventName: string, payload: unknown): void {
		const subscribers = this.events.get(eventName);
		if (subscribers) {
			subscribers.forEach((subscriber) => subscriber(payload));
		}
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
		this.socket.on('error', this.onError.bind(this));
		this.socket.on(config.socketEventName, this.onEvent.bind(this));
		this.socket = io({ port: config.socketPort });
		return this.disconnect.bind(this);
	}

	public subscribe<P>(eventName: string, subscriber: EventSubscriber<P>): void {
		let subscribers: Array<EventSubscriber> = [];
		if (this.events.has(eventName)) {
			subscribers = this.events.get(eventName)!;
		}
		if (!subscribers.includes(subscriber)) {
			subscribers.push(subscriber);
		}
	}

	public unsubscribe<P>(eventName: string, subscriber: EventSubscriber<P>): void {
		if (this.events.has(eventName)) {
			const subscribers = this.events.get(eventName)!;
			const index = subscribers.indexOf(subscriber);
			if (index >= 0) {
				subscribers.splice(index, 1);
			}
		}
	}

}


const socketManager = new SocketManager();

export default socketManager;
