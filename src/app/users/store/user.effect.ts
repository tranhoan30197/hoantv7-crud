import { Injectable } from "@angular/core";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as userActions from './user.action'
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { of } from "rxjs";


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private userService: UserService
    ) { }

    loadUserList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadUserList),
            exhaustMap(() =>
                this.userService.getUserList().pipe(
                    map(res => userActions.loadUserListSuccess({ users: res })),
                    catchError(error => of(userActions.loadUserListFailed({ errors: error })))
                )
            )
        )
    );

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadUser),
            exhaustMap(action =>
                this.userService.getUserById(action.id).pipe(
                    map(res => userActions.loadUserSuccess({ user: res })),
                    catchError(error => of(userActions.loadUserFailed({ errors: error })))
                )
            )
        )
    );

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.createUser),
            exhaustMap(action =>
                this.userService.addNewUser(action.user).pipe(
                    map(res => {
                        return userActions.createUserSuccess({ user: res })
                        // return productActions.loadProductsList();
                    }),
                    catchError(error => of(userActions.createUserFailed({ errors: error })))
                )
            )
        )
    );

    createUserS$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(userActions.createUserSuccess),
            tap((response) => {
              this.router.navigate(['/users']);
            })
          ),
        { dispatch: false }
      );

      updateUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(userActions.updateUser),
        exhaustMap(action =>
          this.userService.updateUser(action.user).pipe(
            map(res => {
              return userActions.updateUserSuccess({ user: res })
              // return productActions.loadProductsList();
            }),
            catchError(error => of(userActions.updateUserFailed({ errors: error })))
          )
        )
      )
    );

    updateUserS$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(userActions.updateUserSuccess),
            tap((response) => {
              this.router.navigate(['/users']);
            })
          ),
        { dispatch: false }
      );
}