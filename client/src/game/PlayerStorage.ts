import Player, { Properties as PlayerProperties } from './Player';
import socketManager from 'services/SocketManager';

class PlayerStorage {

	public player: Player | null;
	public remotes: Map<string, Player>;

	constructor() {
		this.player = null;
		this.remotes = new Map();
	}

	private onNewPlayer(props: PlayerProperties): void {
		this.remotes.set(props.id, new Player(props));
	}

	private onPlayerDeath(id: string): void {
		this.remotes.delete(id);
	}

	public createPlayer(props: PlayerProperties): void {
		this.player = new Player(props);
	}

	public init(): void {

	}

}

export default PlayerStorage;
