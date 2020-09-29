import { Reducer } from 'redux';
import { SET_NAME } from 'store/types/player';

const defaultState: PlayerReducerState = {
	name: '',
};

const reducer: Reducer<PlayerReducerState, PlayerReducerActions> = (state = defaultState, action) => {
	switch (action.type) {
		case SET_NAME:
			return { ...state, name: action.payload };
		default: break;
	}
	return state;
};

export default reducer;
