import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from 'app/auth/components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'app/auth/store/reducers';
import { AuthService } from 'app/auth/services/auth.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
