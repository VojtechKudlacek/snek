// Socket Reducer

type SocketTypeSetLoading = 'socket/setLoading';
type SocketTypeSetError = 'socket/setError';

type SocketActionSetLoading = ReducerAction<SocketTypeSetLoading, boolean>;
type SocketActionSetError = ReducerAction<SocketTypeSetError, string>;

type SocketReducerActions = SocketActionSetLoading | SocketActionSetError;

// Player reducer

type PlayerTypeSetName = 'player/setName';

type PlayerActionSetName = ReducerAction<PlayerTypeSetName, string>;

type PlayerReducerActions = PlayerActionSetName;
