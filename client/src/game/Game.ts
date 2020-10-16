interface Properties {
	renderer: HTMLCanvasElement;
}

class Game {

	private renderer: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor(props: Properties) {
		this.renderer = props.renderer;
		this.ctx = this.renderer.getContext('2d') as CanvasRenderingContext2D;
	}

	public start(): void {
		this.ctx.clearRect(0, 0, 100, 100);
	}

}

export default Game;
