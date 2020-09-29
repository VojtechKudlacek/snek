import { SET_CONNECTED, SET_ERROR, SET_LOADING } from 'store/types/socket';

export const setConnected = (connected: boolean): SocketActionSetConnected => ({
	type: SET_CONNECTED,
  payload: connected,
});

export const setLoading = (loading: boolean): SocketActionSetLoading => ({
	type: SET_LOADING,
	payload: loading,
});

export const setError = (error: string): SocketActionSetError => ({
	type: SET_ERROR,
	payload: error,
});
