import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/api.constants';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  createPlatform(platformData: any): Observable<any> {
    return this.http.post(ENDPOINTS.PLATFORM, platformData, {
      headers: this.getAuthHeaders()
    });
  }

  getAllPlatforms(): Observable<any[]> {
    return this.http.get<any[]>(ENDPOINTS.PLATFORM, {
      withCredentials: true,
      headers: this.getAuthHeaders()
    });
  }
}

