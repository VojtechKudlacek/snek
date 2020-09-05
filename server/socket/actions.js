const SOCKET = {
	CONNECT: 'connection',
	DISCONNECT: 'disconnect',
	RECEIVED: {
		REQUEST_CONFIG: 'requestConfig',
		CREATE_PLAYER: 'createPlayer',
		CHANGE_DIRECTORY: 'changeDirectory',
	},
	SEND: {
		CONFIG: 'config',
		CREATE_PLAYER: 'playerCreated',
	},
	BROADCAST: {
		NEW_PLAYER: 'newPlayer',
		CHANGE_DIRECTORY: 'playerChangedDirectory'
	}
};

module.exports = {
	SOCKET
};
