import { createSelector } from 'reselect';

const selectSocketState = (state: StoreState) => state.socket;

export const selectLoading = createSelector([selectSocketState], (state) => state.loading);

export const selectError = createSelector([selectSocketState], (state) => state.error);
