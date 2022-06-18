import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'app/auth/store/actionTypes';
import { LoginRequestInterface } from 'app/auth/types/loginRequestInterface';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';

export const loginAction = createAction(ActionTypes.LOGIN, props<{ request: LoginRequestInterface }>());

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ errors: BackendErrorsInterface }>());
