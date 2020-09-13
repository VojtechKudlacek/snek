import io from 'socket.io';
import chalk from 'chalk';
import Game from './game/Game';

(() => {
	const port = 3000;
	const server = io();
	const game = new Game(server);
	game.run();
	server.listen(port);
	console.log(`${chalk.cyan('Socket server started on port')} ${chalk.green(port)}`);
})();
