import React, { Component, createRef, ReactNode, RefObject } from 'react';
import config from 'config';
import SnekGame from 'game';

interface Properties {}

class Game extends Component<Properties> {

	private canvasRef: RefObject<HTMLCanvasElement>;
	private game!: SnekGame;

	constructor(props: Properties) {
		super(props);
		this.canvasRef = createRef();
	}

	componentDidMount(): void {
		const renderer = this.canvasRef.current as HTMLCanvasElement;
		this.game = new SnekGame({ renderer });
		this.game.start();
	}

	render(): ReactNode {
		return (
			<div className="game">
				<canvas
					ref={this.canvasRef}
					width={config.gameWidth}
					height={config.gameHeight}
				/>
			</div>
		);
	}

}

export default Game;
