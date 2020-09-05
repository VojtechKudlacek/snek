const { SOCKET } = require('../socket/actions');
const SocketHandler = require('../socket/SocketHandler');
const Player = require('./Player');
const config = require('../config');

class Game {

	/**
	 * @param {import('socket.io').Server} io
	 */
	constructor(io) {
		/** @type {import('socket.io').Server} */
		this.io = io;
		/** @type {Map<string, Player>} */
		this.players = new Map();
	}

	/**
	 * @param {import('socket.io').Socket} socket
	 * @param {string} name
	 * @param {string} color
	 */
	createPlayer = (socket, name, color) => {
		const player = new Player({ id: socket.id, color, name, socket });
		player.setRandomPosition();
		this.players.set(player.id, player);
		return player;
	}

	/**
	 * @param {import('socket.io').Socket} socket
	 */
	createActions(socket) {
		/** @type {{ [key: string]: (...args: Array<any>) => void | Promise<void> }} */
		const actions = {
			[SOCKET.RECEIVED.REQUEST_CONFIG]: () => {
				socket.emit(SOCKET.SEND.CONFIG, config.forPlayer);
			},
			[SOCKET.RECEIVED.CREATE_PLAYER]: async ({ name, color }) => {
				const player = this.createPlayer(socket, name, color);
				socket.emit(SOCKET.SEND.CREATE_PLAYER, player.attributes);
				socket.broadcast.emit(SOCKET.BROADCAST.NEW_PLAYER, player.attributes);
			},
			[SOCKET.RECEIVED.CHANGE_DIRECTORY]: (props) => {
				const player = this.players.get(socket.id);
				player.changeDirectory(props);
				socket.emit(SOCKET.BROADCAST.CHANGE_DIRECTORY, props);
			}
		};
		return actions;
	}

	initListeners() {
		this.io.on(SOCKET.CONNECT, (socket) => {
			const socketHandler = new SocketHandler(socket);
			const actions = this.createActions(socket);

			for (const name in actions) {
				socketHandler.register(name, actions[name]);
			}

			socket.on(SOCKET.DISCONNECT, socketHandler.unregister.bind(socketHandler));
		});
	}

	start() {
		this.initListeners();
	}

}

module.exports = Game;
