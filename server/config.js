class Config {

	constructor() {
		this.defaultPlayerLength = 100;
		this.fieldWidth = 2000;
		this.fieldHeight = 2000;
	}

	get forPlayer() {
		return {
			width: this.fieldWidth,
			height: this.fieldHeight,
			time: Date.now(),
		};
	}

}

const config = new Config();

module.exports = config;
