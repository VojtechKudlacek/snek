import { SET_ERROR, SET_LOADING } from 'store/types/socket';

export const setLoading = (loading: boolean): SocketActionSetLoading => ({
	type: SET_LOADING,
	payload: loading,
});

export const setError = (error: string): SocketActionSetError => ({
	type: SET_ERROR,
	payload: error,
});
