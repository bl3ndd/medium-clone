import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "app/auth/store/actionTypes";
import {CurrentUserInterface} from "app/shared/types/currentUser.interface";
import {BackendErrorsInterface} from "app/shared/types/backendErrors.interface";

export const getCurrentUser = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccess = createAction(
  ActionTypes.GET_CURRENT_USER,
  props<{ user: CurrentUserInterface }>()
)

export const getCurrentFailure = createAction(
  ActionTypes.GET_CURRENT_USER,
  props<{ errors: BackendErrorsInterface }>()
)
