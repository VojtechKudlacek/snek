class SocketHandler {

	/** @param {import('socket.io').Socket} socket */
	constructor(socket) {
		/** @type {import('socket.io').Socket} */
		this.socket = socket;
		/** @type {Array<{ name: string, handler: (...args: Array<any>) => void | Promise<void> }>} */
		this.actions = [];
	}

	/**
	 * @param {string} name
	 * @param {(...args: Array<any>) => void | Promise<void>} action
	 */
	register(name, action) {
		this.socket.on(name, action);
		this.actions.push({ name, handler: action });
	}

	unregister() {
		for (const action of this.actions) {
			this.socket.off(action.name, action.handler);
		}
	}

}

module.exports = SocketHandler;
