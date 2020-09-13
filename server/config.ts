class Config {

	public readonly defaultPlayerLength = 100;
	public readonly fieldWidth = 2000;
	public readonly fieldHeight = 2000;
	public readonly socketEventName = 'event';

	get forPlayer() {
		return {
			width: this.fieldWidth,
			height: this.fieldHeight,
			time: Date.now(),
		};
	}

}

export default new Config();
