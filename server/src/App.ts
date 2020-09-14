import io from 'socket.io';
import chalk from 'chalk';
import Game from 'game/Game';
import config from 'config';

class App {

	private server: io.Server;
	private game: Game;

	constructor() {
		this.server = io();
		this.game = new Game(this.server);
	}

	public run(): void {
		this.game.run();
		this.server.listen(config.serverPort);
		console.log(`${chalk.cyan('Socket server started on port')} ${chalk.green(config.serverPort)}`);
	}

}

export default App;
