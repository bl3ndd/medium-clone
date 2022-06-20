import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from 'app/auth/types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'app/shared/types/currentUser.interface';
import { AuthResponseInterface } from 'app/auth/types/authResponseInterface';
import { environment } from 'environments/environment.prod';
import { LoginRequestInterface } from 'app/auth/types/loginRequestInterface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`;
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  fetchCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`;
    return this.http.get(url).pipe(map(this.getUser));
  }
}
