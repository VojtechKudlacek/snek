import PlayerStorage from './PlayerStorage';

interface Properties {
	renderer: HTMLCanvasElement;
}

class Game {

	private alive: boolean; // Prevents from calling animation frame on non-existing instance
	private renderer: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private playerStorage: PlayerStorage;

	constructor(props: Properties) {
		this.alive = false;
		this.renderer = props.renderer;
		this.ctx = this.renderer.getContext('2d')!;
		this.playerStorage = new PlayerStorage();
		this.loop = this.loop.bind(this);
	}

	private render(): void {

	}

	private loop(time: number): void {
		this.ctx.clearRect(0, 0, 100, 100);
		if (this.alive) {
			requestAnimationFrame(this.loop);
		}
	}

	public start(): void {
		this.alive = true;
		this.playerStorage.init();
		requestAnimationFrame(this.loop);
	}

	public end(): void {
		this.alive = false;
		this.playerStorage.destroy();
	}

}

export default Game;
