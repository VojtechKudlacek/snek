const config = require('../config');
const { randomFromTo } = require('../utils');

class Player {

	/**
	 * @param {{
	 * id: string,
	 * name: string,
	 * color: string,
	 * socket: import('socket.io').Socket,
	 * }} props
	 */
	constructor(props) {
		/** @type {string} */
		this.id = props.id;
		/** @type {string} */
		this.name = props.name;
		/** @type {string} */
		this.color = props.color;
		/** @type {import('socket.io').Socket} */
		this.socket = props.socket;
		/** @type {number} */
		this.length = config.defaultPlayerLength;
		/** @type {number} */
		this.lastUpdate = Date.now();
		/** @type {number} */
		this.vx = 0;
		/** @type {number} */
		this.vy = 0;
		/** @type {number} */
		this.x = 0;
		/** @type {number} */
		this.y = 0;
	}

	setRandomPosition() {
		this.x = randomFromTo(0, config.fieldWidth);
		this.y = randomFromTo(0, config.fieldHeight);
	}

	changeDirectory({ x, y, vx, vy, update }) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.lastUpdate = update;
	}

	get attributes() {
		return {
			id: this.id,
			name: this.name,
			color: this.color,
			length: this.length,
			vx: this.vx,
			vy: this.vy,
			x: this.x,
			y: this.y,
			lastUpdate: this.lastUpdate,
		};
	}

}

module.exports = Player;
