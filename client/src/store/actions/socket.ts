import { SET_CONNECTED, SET_LOADING } from 'store/types/socket';

export const setConnected = (connected: boolean): SocketActionSetConnected => ({
	type: SET_CONNECTED,
  payload: connected,
});

export const setLoading = (loading: boolean): SocketActionSetLoading => ({
	type: SET_LOADING,
	payload: loading,
});
