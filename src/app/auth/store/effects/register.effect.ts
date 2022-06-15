import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerAction, registerFailureAction, registerSuccessAction } from 'app/auth/store/actions/register.action';
import { AuthService } from 'app/auth/services/auth.service';
import { catchError, switchMap, of, map } from 'rxjs';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => registerSuccessAction({ currentUser })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({ errors: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
