interface Dictionary<V = any> {
	[key: string]: V;
}

interface EventData {
	name: string;
	payload: unknown;
}

type SocketEventHandler = (socket: Socket, data: EventData) => void;

type SocketEventListener = (data: EventData) => void;

interface DirectionChange {
	x: number;
	y: number;
	vx: number;
	vy: number;
	update: number;
}
