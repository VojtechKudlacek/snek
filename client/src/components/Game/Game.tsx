import React, { Component, createRef, ReactNode, RefObject } from 'react';

interface Properties {}

class Game extends Component<Properties> {

	private canvasRef: RefObject<HTMLCanvasElement>;

	constructor(props: Properties) {
		super(props);
		this.canvasRef = createRef();
	}

	componentDidMount(): void {
		this
	}

	render(): ReactNode {
		return (
			<canvas ref={this.canvasRef} />
		);
	}

}

export default Game;
