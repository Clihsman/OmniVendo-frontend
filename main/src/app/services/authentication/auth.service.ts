import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/omnivendo/api/v1/auth/authenticate';

  constructor(private http: HttpClient) { }

login(credentials: { email: string; password: string }): Observable<any> {
  return this.http.post(this.apiUrl, credentials);
}

}
