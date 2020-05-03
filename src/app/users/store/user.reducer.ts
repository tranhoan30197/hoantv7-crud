import { User } from '../model/user.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as userActions from './user.action';
import * as _ from 'lodash';

export interface UserState{
    users: User[];
    user: User;
    errors: any;
}

export const initialState: UserState = {
    users: [],
    user: null,
    errors: null
};

const userReducer = createReducer(
    initialState,

    //load Users
    on(userActions.loadUserList, state => ({
        ...state,
        users: [],
        errors: null
    })),

    on(userActions.loadUserListSuccess, (state, { users}) => ({
        ...state,
        users: users,
        errors: null
    })),

    on(userActions.loadUserListFailed, (state, { errors}) => ({
        ...state,
        errors: errors
    })),

    //load user
    on(userActions.loadUser, state => ({
        ...state,
        user: null,
        errors: null
      })),
    
      on(userActions.loadUserSuccess, (state, { user}) => ({
        ...state,
        user: user,
        errors: null
      })),
    
      on(userActions.loadUserFailed, (state, { errors}) => ({
        ...state,
        errors: errors
      })),
    
);
export function UserReducer(state: UserState | undefined, action: Action) {
    return UserReducer(state, action);
  }