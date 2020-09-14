import './setup'; // Env setup
import io from 'socket.io';
import chalk from 'chalk';
import Game from 'game/Game';
import config from 'config';

(() => {
	const server = io();
	const game = new Game(server);
	game.run();
	server.listen(config.serverPort);
	console.log(`${chalk.cyan('Socket server started on port')} ${chalk.green(config.serverPort)}`);
})();
