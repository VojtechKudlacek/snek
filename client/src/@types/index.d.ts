interface Dictionary<T = any> {
	[key: string]: T;
}

interface ReducerAction<T = string, P = void> {
	type: T;
	payload: P;
}

type EventSubscriber<P = any> = (payload: P) => void | Promise<void>;

interface SocketEventData {
	name: string;
	payload: any;
}
