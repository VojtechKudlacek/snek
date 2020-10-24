import Player, { Properties as PlayerProperties } from './Player';
import socketManager, { EVENTS } from 'services/SocketManager';
import store from 'store';
import { setName } from 'store/actions/player';

class PlayerStorage {

	public player: Player | null;
	public remotes: Map<string, Player>;

	constructor() {
		this.player = null;
		this.remotes = new Map();
		this.onNewPlayer = this.onNewPlayer.bind(this);
		this.onPlayerDeath = this.onPlayerDeath.bind(this);
		this.createPlayer = this.createPlayer.bind(this);
	}

	private onNewPlayer(props: PlayerProperties): void {
		this.remotes.set(props.id, new Player(props));
	}

	private onPlayerDeath(id: string): void {
		this.remotes.delete(id);
	}

	public createPlayer(props: PlayerProperties): void {
		this.player = new Player(props);
		store.dispatch(setName(props.name));
	}

	public deletePlayer(): void {
		this.player = null;
	}

	public init(): void {
		socketManager.subscribe(EVENTS.NEW_PLAYER, this.onNewPlayer);
		socketManager.subscribe(EVENTS.CREATE_PLAYER, this.createPlayer);
		socketManager.subscribe(EVENTS.DEATH, this.onPlayerDeath);
	}

	public destroy(): void {
		socketManager.unsubscribe(EVENTS.NEW_PLAYER, this.onNewPlayer);
		socketManager.unsubscribe(EVENTS.CREATE_PLAYER, this.createPlayer);
		socketManager.unsubscribe(EVENTS.DEATH, this.onPlayerDeath);
	}

}

export default PlayerStorage;
