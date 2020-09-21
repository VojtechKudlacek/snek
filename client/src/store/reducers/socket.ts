import { Reducer } from 'redux';
import * as TYPES from 'store/actionTypes/socket';

const defaultState: SocketReducerState = {
	loading: true,
};

const reducer: Reducer<SocketReducerState, ReducerAction> = (state = defaultState, action) => {
	switch (action.type) {
		case TYPES.SET_LOADING:
			return { ...state, loading: action.payload as boolean };
		default: break;
	}
	return state;
};

export default reducer;
