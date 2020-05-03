import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>(
    'users',
);

export const selectUserList = createSelector(
    getUserState,
    state => state.users
);

export const selectUser = createSelector(
    getUserState,
    state => state.user
);

export const selectUserErrors = createSelector(
    getUserState,
    state => state.errors
);