import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'app/auth/store/actionTypes';
import { RegisterRequestInterface } from 'app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequestInterface }>());

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
);
