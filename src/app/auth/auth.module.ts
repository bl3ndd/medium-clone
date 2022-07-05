import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from 'app/auth/components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'app/auth/store/reducers';
import { AuthService } from 'app/auth/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from 'app/auth/store/effects/register.effect';
import { BackendErrorMessagesModule } from 'app/shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistenceService } from 'app/shared/services/persistence.service';
import { LoginComponent } from 'app/auth/components/login/login.component';
import { LoginEffect } from 'app/auth/store/effects/login.effect';
import { GetCurrentUserEffect } from 'app/auth/store/effects/getCurrentUser.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
