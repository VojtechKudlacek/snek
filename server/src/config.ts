class Config {

	public static readonly defaultPlayerLength = 100;
	public static readonly fieldWidth = 2000;
	public static readonly fieldHeight = 2000;
	public static readonly socketEventName = 'event';
	public static readonly serverPort = Number(process.env.PORT);

	public static get forPlayer() {
		return {
			width: Config.fieldWidth,
			height: Config.fieldHeight,
			time: Date.now(),
		};
	}

}

export default Config;
