import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'app/auth/services/auth.service';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { PersistenceService } from 'app/shared/services/persistence.service';
import {
  getCurrentUserFailureAction,
  getCurrentUserAction,
  getCurrentUserSuccessAction,
} from 'app/auth/store/actions/getCurrentUserAction';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const accessToken = this.persistenceService.get('accessToken');
        if (!accessToken) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.fetchCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => of(getCurrentUserFailureAction())),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
  ) {}
}
