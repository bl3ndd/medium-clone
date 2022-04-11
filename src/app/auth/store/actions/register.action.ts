import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'app/auth/store/actionTypes';
import { RegisterRequestInterface } from 'app/auth/types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>(),
);
