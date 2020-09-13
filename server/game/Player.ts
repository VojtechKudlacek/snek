import { Socket } from 'socket.io';
import config from '../config';
import { randomFromTo } from '../utils';

interface Properties {
	id: string;
	name: string;
	color: string;
	socket: Socket;
}

class Player {

	public id: string;
	public name: string;
	public color: string;
	public socket: Socket;
	public length: number;
	public lastUpdate: number;

	public vx: number = 0;
	public vy: number = 0;
	public x: number = 0;
	public y: number = 0;

	constructor(props: Properties) {
		this.id = props.id;
		this.name = props.name;
		this.color = props.color;
		this.socket = props.socket;
		this.length = config.defaultPlayerLength;
		this.lastUpdate = Date.now();
	}

	public setRandomPosition(): void {
		this.x = randomFromTo(0, config.fieldWidth);
		this.y = randomFromTo(0, config.fieldHeight);
	}

	public changeDirection({ x, y, vx, vy, update }: DirectionChange): void {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.lastUpdate = update;
	}

	public get attributes() {
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

export default Player;
