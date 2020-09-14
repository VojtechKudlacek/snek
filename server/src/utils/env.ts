import dotenv from 'dotenv';
import { MissingEnviromentVariable, WrongEnviromentVariableType } from 'errors/validation';

type VariableKey = string;
type VariableType = 'number' | 'string';
type VariableRequired = boolean;

const SCHEMA: Array<[VariableKey, VariableType, VariableRequired]> = [
	['PORT', 'number', true]
];

export const initEnviroment = (): void => {
	dotenv.config();
}

export const validateEnviroment = (): void => {
	for (const [key, type, required] of SCHEMA) {
		const value = process.env[key];
		if (required && !Boolean(value)) {
			throw new MissingEnviromentVariable(key);
		}
		if (type === 'number' && Number.isNaN(Number(value))) {
			throw new WrongEnviromentVariableType(key);
		}
	}
};
