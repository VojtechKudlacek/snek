const socketio = require('socket.io');
const chalk = require('chalk');
const Game = require('./game/Game');

const run = () => {
	const port = 3000;
	const io = socketio();
	const game = new Game(io);
	game.start();
	io.listen(port);
	console.log(`Socket server started at port ${chalk.cyan(port)}`);
};

run();
