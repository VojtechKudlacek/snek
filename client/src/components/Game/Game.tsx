import React, { Component, createRef, ReactNode, RefObject } from 'react';
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
			<canvas ref={this.canvasRef} />
		);
	}

}

export default Game;
