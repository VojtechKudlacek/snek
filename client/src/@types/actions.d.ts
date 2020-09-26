type SocketTypeSetLoading = 'socket/setLoading';
type SocketTypeSetConnected = 'socket/setConnected';

type SocketActionSetLoading = ReducerAction<SocketTypeSetLoading, boolean>;
type SocketActionSetConnected = ReducerAction<SocketTypeSetConnected, boolean>;

type SocketReducerActions = SocketActionSetLoading | SocketActionSetConnected;
