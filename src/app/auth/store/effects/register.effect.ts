import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerAction, registerFailureAction, registerSuccessAction } from 'app/auth/store/actions/register.action';
import { AuthService } from 'app/auth/services/auth.service';
import { catchError, switchMap, of, map, tap } from 'rxjs';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from 'app/shared/services/persistence.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({ errors: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router,
  ) {}
}
