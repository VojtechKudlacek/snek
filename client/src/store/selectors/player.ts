import { createSelector } from 'reselect';

const selectPlayerState = (state: StoreState) => state.player;

export const selectName = createSelector([selectPlayerState], (state) => state.name);
