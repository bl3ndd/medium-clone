import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'app/auth/store/actions/register.action';
import { isSubmittingSelector } from 'app/auth/store/selectors';
import { AppStateInterface } from 'app/shared/types/appState.interface';
import { AuthService } from 'app/auth/services/auth.service';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  onSubmit() {
    this.store.dispatch(registerAction(this.form.value));
    this.authService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {
      console.log(currentUser);
    });
  }
}
