import { Server, Socket } from 'socket.io';
import SocketHandler from 'socket/SocketHandler';
import Player from 'game/Player';
import config from 'config';
import teardown from 'services/teardown';

class Game {

	private io: Server;
	private players: Map<string, Player>;
	private socketHandler: SocketHandler;

	constructor(io: Server) {
		this.io = io;
		this.players = new Map();
		this.socketHandler = new SocketHandler();
	}

	private createPlayer = (socket: Socket, name: string, color: string): Player => {
		const player = new Player({ id: socket.id, color, name, socket });
		player.setRandomPosition();
		this.players.set(player.id, player);
		return player;
	}

	private socketEventHandler(socket: Socket, data: EventData): void {
		switch (data.name) {
			case 'ping': {
				socket.emit('ping', 'pong');
				break;
			}
			case 'config': {
				socket.emit('config', config.forPlayer);
				break;
			}
			case 'createPlayer': {
				const { name, color } = data.payload as { name: string, color: string };
				const player = this.createPlayer(socket, name, color);
				socket.emit('createPlayer', player.attributes);
				socket.broadcast.emit('newPlayer', player.attributes);
				break;
			}
			case 'changeDirection': {
				const player = this.players.get(socket.id);
				player?.changeDirection(data.payload as DirectionChange);
				socket.emit('changeDirectory', data.payload);
				break;
			}
			case 'death': {
				this.players.delete(socket.id);
				this.io.emit('death', socket.id);
			}
		}
	}

	public run(): void {
		this.io.on('connection', this.socketHandler.registerSocket);
		this.socketHandler.handler = this.socketEventHandler.bind(this);
		teardown.register(this.socketHandler.kill.bind(this.socketHandler));
	}

}

export default Game;
