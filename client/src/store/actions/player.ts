import { SET_NAME } from 'store/types/player';

export const setConnected = (name: string): PlayerActionSetName => ({
	type: SET_NAME,
  payload: name,
});
