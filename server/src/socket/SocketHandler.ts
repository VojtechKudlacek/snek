import { Socket } from 'socket.io';
import config from '../config';

class SocketHandler {

	private sockets: Map<string, Socket>;
	private listeners: Map<string, SocketEventListener>;
	private onAction!: SocketEventHandler;

	constructor() {
		this.sockets = new Map();
		this.listeners = new Map();
	}

	private createListener = (socket: Socket): SocketEventListener => (data: EventData): void => {
		this.onAction(socket, data);
	}

	private killSocket(socket: Socket): void {
		const listener = this.listeners.get(socket.id);
		if (listener) {
			socket.off(config.socketEventName, listener);
		}
		this.sockets.delete(socket.id);
		this.listeners.delete(socket.id);
	}

	public registerSocket(socket: Socket): void {
		const listener = this.createListener(socket);
		this.listeners.set(socket.id, listener);
		this.sockets.set(socket.id, socket);
		socket.on(config.socketEventName, listener);
		socket.on('disconnect', this.killSocket.bind(this, socket));
	}

	public kill(): void {
		this.sockets.forEach((socket) => socket.disconnect(true));
		this.sockets.clear();
		this.listeners.clear();
	}

	public set handler(handler: SocketEventHandler) {
		this.onAction = handler;
	}

}

export default SocketHandler;
