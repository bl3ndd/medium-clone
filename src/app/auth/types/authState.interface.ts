import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'app/shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
