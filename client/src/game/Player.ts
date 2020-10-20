export interface Properties extends Vector, Direction {
	id: string;
	name: string;
	color: string;
	length: number;
	lastUpdate: number;
}

class Player {

	public id: string;
	public name: string;
	public color: string;
	public length: number;
	public lastUpdate: number;

	public vx: number;
	public vy: number;
	public x: number;
	public y: number;

	constructor(props: Properties) {
		this.id = props.id;
		this.name = props.name;
		this.color = props.color;
		this.length = props.length;
		this.lastUpdate = props.lastUpdate;
		this.vx = props.vx;
		this.vy = props.vy;
		this.x = props.x;
		this.y = props.y;
	}

}

export default Player;
