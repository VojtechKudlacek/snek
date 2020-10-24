import PlayerStorage from './PlayerStorage';

interface Properties {
	renderer: HTMLCanvasElement;
}

class Game {

	private renderer: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private playerStorage: PlayerStorage;

	constructor(props: Properties) {
		this.renderer = props.renderer;
		this.ctx = this.renderer.getContext('2d')!;
		this.playerStorage = new PlayerStorage();
	}

	public start(): void {
		this.ctx.clearRect(0, 0, 100, 100);
		this.playerStorage.init();
	}

	public end(): void {
		this.playerStorage.destroy();
	}

}

export default Game;
