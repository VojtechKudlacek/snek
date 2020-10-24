interface Dictionary<T = any> {
	[key: string]: T;
}

interface ReducerAction<T = string, P = void> {
	type: T;
	payload: P;
}

type EventSubscriber = (payload: unknown) => void | Promise<void>;

interface SocketEventData {
	name: string;
	payload: unknown;
}
