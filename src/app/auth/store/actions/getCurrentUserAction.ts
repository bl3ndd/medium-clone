import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'app/auth/store/actionTypes';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);
