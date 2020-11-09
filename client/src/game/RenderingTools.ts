import Player from './Player';
import { calculateDistance } from './utils';

class RenderingTools {

	private ctx: CanvasRenderingContext2D;

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;
	}

	public renderPlayer(player: Player): void {
		let length = player.length;
		let lastVector = player.getPosition();

		this.ctx.beginPath();
		this.ctx.moveTo(player.x, player.y);

		for (let i = player.turns.length - 1; i >= 0; i--) {
			const turn = player.turns[i];
			length -= calculateDistance(turn.x, turn.y, lastVector.y, lastVector.y);
			this.ctx.lineTo(turn.x, turn.y);
			lastVector = turn;
		}

		const finishPoint = 0; // TODO

		this.ctx.strokeStyle = player.color;
		this.ctx.stroke();
	}

}

export default RenderingTools;
