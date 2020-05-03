import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const loadUserList = createAction(
    '[Users List Page] Load Users List'
);

export const loadUserListSuccess = createAction(
    '[Users List API] Load Users List Success',
    props<{ users: User[] }>()
);

export const loadUserListFailed = createAction(
    '[Users List API] Load Users List Failed',
    props<{ errors: any }>()
);

export const loadUser = createAction(
    '[Users Page] Load User',
    props<{ id: number }>()
);

export const loadUserSuccess = createAction(
    '[Users API] Load User Success',
    props<{ user: User }>()
  );

  export const loadUserFailed = createAction(
    '[Users API] Load User Failed',
    props<{ errors: any }>()
  );

  export const createUser = createAction(
    '[CreateUser Page] Create User',
    props<{user: User}>()
  );
  
  export const createUserSuccess = createAction(
    '[Users API] Create User Success',
    props<{ user: User }>()
  );
  
  export const createUserFailed = createAction(
    '[Users API] Create User Failed',
    props<{ errors: any }>()
  );

  //Update
  export const updateUser = createAction(
    '[UpdateUser Page] Update User',
    props<{user: User}>()
  );
  
  export const updateUserSuccess = createAction(
    '[User API] Update User Success',
    props<{ user: User }>()
  );
  
  export const updateUserFailed = createAction(
    '[User API] Update User Failed',
    props<{ errors: any }>()
  );