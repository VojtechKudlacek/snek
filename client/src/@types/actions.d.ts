// Socket Reducer

type SocketTypeSetLoading = 'socket/setLoading';
type SocketTypeSetConnected = 'socket/setConnected';
type SocketTypeSetError = 'socket/setError';

type SocketActionSetConnected = ReducerAction<SocketTypeSetConnected, boolean>;
type SocketActionSetLoading = ReducerAction<SocketTypeSetLoading, boolean>;
type SocketActionSetError = ReducerAction<SocketTypeSetError, string>;

type SocketReducerActions = SocketActionSetLoading | SocketActionSetConnected | SocketActionSetError;

// Player reducer

type PlayerTypeSetName = 'player/setName';

type PlayerActionSetName = ReducerAction<PlayerTypeSetName, string>;

type PlayerReducerActions = PlayerActionSetName;
