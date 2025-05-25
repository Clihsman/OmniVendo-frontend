import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private apiUrl = 'http://localhost:3001/omnivendo/api/v1/app/platform';

  constructor(private http: HttpClient) {}

  createPlatform(platformData: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(this.apiUrl, platformData, { headers });
  }
}
