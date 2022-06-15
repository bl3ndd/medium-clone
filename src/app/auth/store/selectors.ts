import { AppStateInterface } from 'app/shared/types/appState.interface';
import { AuthStateInterface } from 'app/auth/types/authState.interface';
import { createSelector } from '@ngrx/store';

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting,
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.validationErrors,
);
