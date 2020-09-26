interface Dictionary<T = any> {
	[key: string]: T;
}

interface ReducerAction<T = string, P = void> {
	type: T;
	payload: P;
}
