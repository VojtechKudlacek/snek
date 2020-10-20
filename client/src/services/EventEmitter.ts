type EventSubscriber = (...arg: Array<any>) => void | Promise<void>;

class EventEmitter {

	private events: Map<String, Array<EventSubscriber>>;

	constructor() {
		this.events = new Map();
	}

	public subscribe(eventName: string, subscriber: EventSubscriber): void {
		let subscribers: Array<EventSubscriber> = [];
		if (this.events.has(eventName)) {
			subscribers = this.events.get(eventName)!;
		}
		if (!subscribers.includes(subscriber)) {
			subscribers.push(subscriber);
		}
	}

	public unsubscribe(eventName: string, subscriber: EventSubscriber): void {
		if (this.events.has(eventName)) {
			const subscribers = this.events.get(eventName)!;
			const index = subscribers.indexOf(subscriber);
			if (index >= 0) {
				subscribers.splice(index, 1);
			}
		}
	}

	public dispatch(eventName: string, ...data: Array<any>): void {
		const subscribers = this.events.get(eventName);
		if (subscribers) {
			subscribers.forEach((subscriber) => subscriber(...data));
		}
	}

}

export default EventEmitter;
