class Config {

	public static readonly socketPort = process.env.REACT_APP_SOCKET_PORT;
	public static readonly gameWidth = 800;
	public static readonly gameHeight = 600;
	public static readonly socketEventName = 'event';

}

export default Config;
