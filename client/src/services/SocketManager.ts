import io from 'socket.io-client';

export class SocketManager {

	private socket!: SocketIOClient.Socket;

	public connect(cb: VoidFunction): void {
		this.socket.on('connect', cb);
		this.socket = io({ port: process.env.REACT_APP_SOCKET_PORT });
	}

}


const socketManager = new SocketManager();

export default socketManager;
