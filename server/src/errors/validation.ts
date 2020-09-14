export class MissingEnviromentVariable extends Error {
	constructor(variable: string) {
		const msg = `MISSING_ENVIROMENT_VARIABLE (${variable})`;
		super(msg);
	}
}

export class WrongEnviromentVariableType extends Error {
	constructor(variable: string) {
		const msg = `WRONG_ENVIROMENT_VARIABLE_TYPE (${variable})`;
		super(msg);
	}
}
