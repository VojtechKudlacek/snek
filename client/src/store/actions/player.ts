import { SET_NAME } from 'store/types/player';

export const setName = (name: string): PlayerActionSetName => ({
	type: SET_NAME,
  payload: name,
});
