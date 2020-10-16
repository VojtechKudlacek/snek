import { Reducer } from 'redux';
import { SET_ERROR, SET_LOADING } from 'store/types/socket';

const defaultState: SocketReducerState = {
	loading: true,
	error: '',
};

const reducer: Reducer<SocketReducerState, SocketReducerActions> = (state = defaultState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, error: action.payload };
		case SET_LOADING:
			return { ...state, loading: action.payload };
		default: break;
	}
	return state;
};

export default reducer;
