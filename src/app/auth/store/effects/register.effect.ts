import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerAction, registerFailureAction, registerSuccessAction } from 'app/auth/store/actions/register.action';
import { AuthService } from 'app/auth/services/auth.service';
import { catchError, switchMap, of, map } from 'rxjs';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => registerSuccessAction({ currentUser })),
          catchError(() => of(registerFailureAction())),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
